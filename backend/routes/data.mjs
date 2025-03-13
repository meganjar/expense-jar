import express from 'express'
import ConnectDB from '../db/conn.mjs'
import { ObjectId } from 'mongodb'


const router = express.Router()

router.get("/", async (req, res) => {
   const db = await ConnectDB()
   const collection = db.collection("users")
    const data = await req.db.collection("data").find().toArray()
    res.send(data)
})