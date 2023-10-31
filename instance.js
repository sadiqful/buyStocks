import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const instance = axios.create({
    baseURL: process.env.STOCK_API,
    method: GET,
})

export default instance