import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './aap.js';


dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB Connection Failed !!!",error)
})









/*
import express from 'express'

const app = express();

( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("Error", (error) => {
            console.log("Error",error);
            throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listenting on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("ERROR:",error)
        throw error
        
    }
})()
    */