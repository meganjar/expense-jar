// 1. imports
import express from 'express'; // The server were gonna use
import cors from 'cors' // Handle route headers so they are readable
import session from 'cookie-session'
import passport from 'passport'
import 'dotenv/config' // Loads .env variables into process.env.
import connectDB from './db/conn.mjs' // How we connect to Mongo
import receipts from './model/receipts.mjs'
import users from './model/users.mjs'
import './config/passport.mjs'
import userRoutes from './routes/userRoutes.mjs'


// import Todo from './model.js' // Todo is our model
// 2 create app
const app = express();
const port = 8080
app.use(cors())
app.use(express.json()) // <--- if we want to handle a post request
connectDB() 
app.use('/api/users', userRoutes);
// app.use("/login", oAuthRoutes)
// app.use("/users", userRoutes)
// app.use("/receipts", receipts)
// listen on a specific port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})
