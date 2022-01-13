import React from "react";
import { useState, useContext} from 'react'
import {RecipeContext} from '../Context/context'
import Recipes from '../Recipes/recipes'

export default function Pizza(){

    /* const [recipes, setRecipes]= useState([]);

    const handelClick = async ()=>{
        console.log('Hello from pizza button')

        const response = await axios.get('/recipes?category=pizza')
        setRecipes([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)
    }
    useEffect(()=> handelClick(),[]) */
    // const {recipes} = useContext(RecipeContext) 
   
    return(
        <div>
            Pizza
            <Recipes categoryType={'pizza'} />
            {/* <div>{recipes.map((item) => item.category =='pizza' ?
            <ul>
                <li><h3>{item.title}</h3></li>
                <li>{item.cooktime}</li>
                <ul><h4>ingredient:</h4>
                    {item.ingredient.map(item=>
                      <li>
                          {item}
                      </li>  )}
                </ul>
            </ul>
            :<></>)}
            </div> */}
        </div>
    )
}