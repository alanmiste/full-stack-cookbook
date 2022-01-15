import React from "react";
import { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../Context/context'
import { Link } from "react-router-dom";

export default function Recipes({ categoryType }) {

    const { recipes } = useContext(RecipeContext) //fetch data from context.js

    const [recipe, setRecipe] = useState([]) //this state to save recipes in it locally

    useEffect(() => {
        setRecipe([...recipes.filter(item => item.category === categoryType)])
        //set the recipes in recipe after filtering it consider of category
    }, [])


    console.log('recipes component conext is', recipes)
    return (

        <div>{recipe?.map((item, id) => <Link key={item._id} to={`/oneRecipe/${item._id}`}>
            <div >
                <h4>{item.title}</h4>
                <p>{item.cooktime}</p>
            </div>
        </Link>
        )}
        </div>

    )
}