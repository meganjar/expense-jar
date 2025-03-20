// 1. imports
import express from "express"; // The server were gonna use
import session from "express-session";
import passport from "passport";
import cors from "cors"; // Handle route headers so they are readable
import "dotenv/config"; // Loads .env variables into process.env.
import connectDB from "./db/conn.mjs"; // How we connect to Mongo
import "./config/passport.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import receiptRoutes from "./routes/receiptRoutes.mjs";
import oAuthRoutes from "./routes/oAuthRoutes.mjs";

// import Todo from './model.js' // Todo is our model
// 2 create app
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json()); // <--- if we want to handle a post request
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace for production
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 90,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
connectDB();
app.use("/api/users", userRoutes);
app.use("/api/receipts", receiptRoutes);
app.use("/api/auth", oAuthRoutes);

// listen on a specific port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
