import express from "express";
import cors from 'cors';
import connectToDatabase from "./db.js";

const PORT = 3001;
const app = express()

connectToDatabase()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("buyStocks APIs are starting...")
})

app.listen(PORT, () => {
    console.log(`App started at http//:localhost:${PORT}`)
} )