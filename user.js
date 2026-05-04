const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.get("/register", (req, res) => {
  res.render("register", { error: "" });
});

router.post("/register", async (req, res) => {
  try {
    const { username, password, age, gender, fitnessGoal } = req.body;
    
    // Validate inputs
    if (!username || !password || !age || !gender || !fitnessGoal) {
      return res.render("register", { error: "All fields are required!" });
    }

    const user = new User({ username, age, gender, fitnessGoal });
    const registeredUser = await User.register(user, password);
    
    passport.authenticate("local")(req, res, () => {
      res.redirect("/workouts");
    });
  } catch (error) {
    let errorMessage = "Registration failed. Please try again.";
    
    if (error.name === "UserExistsError") {
      errorMessage = "Username already exists! Please choose a different username.";
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    res.render("register", { error: errorMessage });
  }
});

router.get("/login", (req, res) => {
  res.render("login", { error: "" });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.render("login", { error: "An error occurred during login." });
    }
    if (!user) {
      return res.render("login", { error: "Invalid username or password!" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.render("login", { error: "Login failed. Please try again." });
      }
      res.redirect("/workouts");
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});

module.exports = router;