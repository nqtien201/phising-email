import mongoose from "mongoose";
import { DB_CONN_STRING } from "../helper/contants";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${DB_CONN_STRING}`);
        console.log("MongoDB connected");   
    } catch (error) {
         console.log("Connect Failed!!!", error);
    }
}