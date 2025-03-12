import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// db.mjs


dotenv.config();

console.log("hi")

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI 

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;