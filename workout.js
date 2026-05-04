const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workoutType: {
    type: String,
    required: true,
    immutable: true 
  },
  duration: Number,
  caloriesBurned: Number,
  workoutDate: Date,
  notes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Workout", workoutSchema);