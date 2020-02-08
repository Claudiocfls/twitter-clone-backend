const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  changedUsername: {
    type: Boolean,
    default: false,
  },
  signupAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema);
