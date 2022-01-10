const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title : {
        type : String
    },
    ingredient : {
        type : Array
    },
    preparation : {
        type : Array
    },
    published : {
        type : Boolean
    }
})

const recipeModel = mongoose.model('Recipe', recipeSchema)

module.exports = recipeModel