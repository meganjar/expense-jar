import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';


const usersSchema = new mongoose.Schema({
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
          return validator.isEmail(email) && !email.includes("+");
        },
        message: "Not a valid email address",
      },
  },
  password: {
    type: String,
    required: true,
  },
});

usersSchema.index({ email: 1 });

export default mongoose.model("Users", usersSchema);
