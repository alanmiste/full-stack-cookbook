import React from "react";
import {useContext} from 'react'
import {RecipeContext} from '../Context/context'

export default function Recipes({categoryType}){

    const {recipes} = useContext(RecipeContext) 
   
    return(
        <div>
            <div>{recipes.map((item) => item.category == categoryType ?
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
            </div>
        </div>
    )
}