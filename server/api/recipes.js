const express = require('express')
const router = express.Router();

const bodyParser = require('body-parser');

const Mongoose = require('mongoose')

// MODELS
const Recipes = require('../models/recipesModel');

// MIDDLEWARES
router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))

// ROUTES
router.get('/', async (req, res) => {

    console.log('Find route')

    // const data = await Recipes.find({category: req.query.category})
    const data = await Recipes.find()

    console.log(data)
   
    res.send(data)
    
})
module.exports = router;
