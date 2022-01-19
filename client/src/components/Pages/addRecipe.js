import React from "react";
import { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../Context/context'
import axios from 'axios'

export default function AddRecipe() {


    // const addRecipe = async ()=>{
    //     console.log('Hello from addRecipes')

    //     const search = '61dd94367da84425ef953d86'

    //     const data = await axios.get(`/recipes/find?_id=${search}`)

    //     console.log('data= ',data)
    // }
    
    
    const addRecipe = async ()=>{
        console.log('Hello from addRecipes')

        // "_id":{"$oid":"61db37f9ac938a7765f06767"}
        const recipe = {
            "title":"Test recipe",
            "ingredient":["4 tbsp passata",
                "1 garlic clove , crushed"],
            "preparation":["Heat the oven to 220C.",
                "Mix the passata, garlic, olive"],
            "published":false,
            "category":"pizza",
            "cooktime":"18 min",
            "description":"This is an extremely easy."}

        const response = await axios.post('/recipes/add', recipe)

        console.log('data= ', response)

        window.location.reload(false); //to refresh the page after the recipe has been added
    }





    return (
        <div>
            add Recipe
            <button onClick={addRecipe}>add Recipe</button>
        </div>

    )
}