const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

// GET /workouts
router.get("/workouts", isLoggedIn, async (req, res) => {
  const workouts = await Workout.find({ user: req.user._id });
  res.render("workouts", { workouts });
});

// GET /workout/new
router.get("/workout/new", isLoggedIn, (req, res) => {
  res.render("new-workouts", { error: "" });
});

// POST /workout
router.post("/workout", isLoggedIn, async (req, res) => {
  try {
    const { workoutType, duration, caloriesBurned, workoutDate, notes } = req.body;
    
    // Validate required fields
    if (!workoutType || !duration || !caloriesBurned || !workoutDate) {
      return res.render("new-workouts", { error: "All required fields must be filled!" });
    }

    // Validate numeric values
    if (isNaN(duration) || isNaN(caloriesBurned) || duration <= 0 || caloriesBurned <= 0) {
      return res.render("new-workouts", { error: "Duration and calories must be positive numbers!" });
    }

    const workout = new Workout({
      workoutType,
      duration,
      caloriesBurned,
      workoutDate,
      notes,
      user: req.user._id
    });
    
    await workout.save();
    res.redirect("/workouts");
  } catch (error) {
    let errorMessage = "Failed to create workout. Please try again.";
    if (error.message) {
      errorMessage = error.message;
    }
    res.render("new-workouts", { error: errorMessage });
  }
});


router.get("/workouts/:id", isLoggedIn, async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render("show-workout", { workout });
});


router.get("/workouts/:id/edit", isLoggedIn, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).render("workouts", { workouts: [], error: "Workout not found!" });
    }
    res.render("edit-workout", { workout, error: "" });
  } catch (error) {
    res.render("workouts", { workouts: [], error: "Failed to load workout!" });
  }
});


router.put("/workouts/:id", isLoggedIn, async (req, res) => {
  try {
    const { duration, caloriesBurned, workoutDate, notes } = req.body;
    
    // Validate required fields
    if (!duration || !caloriesBurned || !workoutDate) {
      const workout = await Workout.findById(req.params.id);
      return res.render("edit-workout", { workout, error: "All required fields must be filled!" });
    }

    // Validate numeric values
    if (isNaN(duration) || isNaN(caloriesBurned) || duration <= 0 || caloriesBurned <= 0) {
      const workout = await Workout.findById(req.params.id);
      return res.render("edit-workout", { workout, error: "Duration and calories must be positive numbers!" });
    }

    await Workout.findByIdAndUpdate(req.params.id, {
      duration,
      caloriesBurned,
      workoutDate,
      notes
    });

    res.redirect(`/workouts/${req.params.id}`);
  } catch (error) {
    const workout = await Workout.findById(req.params.id);
    res.render("edit-workout", { workout, error: "Failed to update workout. Please try again." });
  }
});


router.delete("/workouts/:id", isLoggedIn, async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.redirect("/workouts");
});

module.exports = router;