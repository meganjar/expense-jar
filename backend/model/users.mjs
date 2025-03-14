import mongoose from "mongoose";
import validator from 'validator/lib/isEmail.js';


const usersSchema = new mongoose.Schema({
 googleId: {
    type: String,
    required: true,  // Make it required
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


export default mongoose.model("Users", usersSchema);
