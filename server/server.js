const express = require('express') //import express

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
app.listen(port, ()=> console.log('the server is running at port: ', port))