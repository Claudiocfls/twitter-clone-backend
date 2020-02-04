const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  signupAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema);
