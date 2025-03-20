import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const usersSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true, // Make it required
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return isEmail(email) && !email.includes("+");
      },
      message: "Not a valid email address",
    },
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },
});

export default mongoose.model("Users", usersSchema);
