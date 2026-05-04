const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"]
  },
  fitnessGoal: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);