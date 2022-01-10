//import mongoose to connect to DB
const mongoose = require('mongoose'); 

require('dotenv').config() //to import .env file
//connect to DB
const connectDB = async ()=> {
    //in order to finde out if there are any Error we use try-catch block
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('mongoDB connected.')
    } catch (error) {
        console.error(error.message) //to print the error mesage in the console

        // if failure then exit server
        process.exit(1)
    }
}

module.exports = connectDB;
