import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectdb=async ()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database Connection Success")

    }
    catch(error){
        console.log("Database Connection Failed",error);
    }
}