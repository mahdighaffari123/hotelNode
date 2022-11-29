const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please insert your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please insert your Last Name"],
  },
  //   photo: {
  //     type: String,
  //   },
  email: {
    type: String,
    required: [true, "Please provide your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid Email address"],
  },
  //   role: {
  //     type: String,
  //     default: "user",
  //     enum: ["user", "admin"],
  //   },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Password most have at least 8 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    // This only works with Create and Save methods
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  //   active: {
  //     type: Boolean,
  //     default: true,
  //     select: false,
  //   },
  //   passwordChangedAt: Date,
  //   passwordResetToken: String,
  //   passwordResetExpires: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
