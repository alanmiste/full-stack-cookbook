/* const express = require('express') //import express

require('dotenv').config();

const app = express(); // create server

const pizzaGet = (req,res)=>{
    console.log('Pizza GET endpoint')
    res.send('Hello from /pizza Get') //to send a response to the front end
}

//app.get('/pizza',pizzaGet)

app
.route('/pizza')
.get(pizzaGet)
.post(pizzaGet)
.put(pizzaGet)
.delete(pizzaGet)


const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log('the server is running at port: ', port)) */

// 1. import express and router
const express = require('express')
require('dotenv').config()

// 2. create server
const app = express()

const connectDB = require('./config/db')
connectDB()

/**
 * DEFINE ROUTES
 */
 app.use('/recipes', require('./api/recipes'));
 // 4. listen to some port
 
 const port = process.env.PORT || 8008;
 app.listen(port, () => console.log('Server is UP and Running at port: ' + port))