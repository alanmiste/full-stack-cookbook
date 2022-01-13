/* import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { TopologyDescription } from 'mongodb';

export const RecipeContext = createContext()


export default function RecipeProvider({children}) {


    const [recipes, setRecipes]= useState([]);

    const pullRecipes = async ()=>{
        console.log('Hello from pullRecipes/context')

        const response = await axios.get('/recipes?category=pizza')
        setRecipes([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)
    }

    // add useEffect to pull the recipes from DB when the page is loaded
    // useEffect(()=> pullRecipes(),[])

    return (
        // <ArticleContext.Provider value = {{articles, saveArticle}}>
        <RecipeContext.Provider value = {{recipes, pullRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
} */