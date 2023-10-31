import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectToDatabase = () => {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('Database connected'))
    .catch((err) => console.log(err));
}

export default connectToDatabase