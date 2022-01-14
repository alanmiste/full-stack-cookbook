import React from "react";
import { useContext } from 'react'
import { RecipeContext } from '../Context/context'
import { Link } from "react-router-dom"; 

export default function Recipes({ categoryType }) {

    const { recipes } = useContext(RecipeContext)

    return (
        <div>
            <div>{recipes.map((item) => item.category === categoryType ?
                <Link to={`/oneRecipe:${item._id}`}>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.cooktime}</p>
                    </div>
                </Link>
                : <></>)}
            </div>
        </div>
    )
}