const express = require('express')
const router = express.Router();


// MIDDLEWARES
const bodyParser = require('body-parser');

router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))



const Mongoose = require('mongoose')

// MODELS
const Recipes = require('../models/recipesModel');


// ROUTES
router.get('/', async (req, res) => {

    console.log('Find route req.query', req.query)

    // const data = await Recipes.find({category: req.query.category})
    const data = await Recipes.find()

    // console.log('this is data from api',data)
   
    res.send(data)
    
})


router.get('/find', async (req, res) => {

    console.log('Find route req.query', req.query)

    const data = await Recipes.find(req.query)
    console.log('Data ...... ', data)
    res.send(data)
    
})

router.post('/add', async (req,res)=> {
    console.log('add route: body is ', req.body)
    
    const newRecipe = new Recipes(req.body) // to create the body of the object that will be added to DB
    console.log('add route: body is ', newRecipe)

    const data = await newRecipe.save() // to save the recipe in the DB

    res.send('hello from add route')
})


module.exports = router;
