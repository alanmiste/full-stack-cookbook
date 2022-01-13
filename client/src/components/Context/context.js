import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipeContext = createContext()


export default function RecipeProvider({children}) {


    const [recipes, setRecipes]= useState([]);
    const [noodle, setNoodle]= useState([]);

    const pullRecipes = async ()=>{
        console.log('Hello from pullRecipes/context')

        // const response = await axios.get('/recipes?category=pizza')
        const response = await axios.get('/recipes')
        setRecipes([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)
    }

    /* const pullNoodle = async ()=>{
        console.log('Hello from pullNoodle/context')

        const response = await axios.get('/recipes?category=noodle')
        setNoodle([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)
    }
 */
    console.log('this is full array ',recipes)

    // add useEffect to pull the recipes from DB when the page is loaded
    useEffect(()=> pullRecipes(),[])
    // useEffect(()=> pullNoodle(),[])

    return (
        // <RecipeContext.Provider value = {{recipes, pullRecipes}}>
        <RecipeContext.Provider value = {{recipes}}>
            {children}
        </RecipeContext.Provider>
    )
}