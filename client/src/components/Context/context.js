import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipeContext = createContext()


export default function RecipeProvider({children}) {


    const [recipes, setRecipes]= useState([]);

    const pullRecipes = async ()=>{
        console.log('Hello from pullRecipes/context')

        // const response = await axios.get('/recipes?category=pizza')
        const response = await axios.get('/recipes')
        setRecipes([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)

    }

  


    return (
        <RecipeContext.Provider value = {{recipes, pullRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}