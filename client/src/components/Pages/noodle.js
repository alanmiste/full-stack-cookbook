import React from "react";
import {useContext} from 'react'
import {RecipeContext} from '../Context/context'

export default function Noodle(){

    const {recipes} = useContext(RecipeContext) 
    
    return(
        <div>
            Noodle
            <div>{recipes?.map((item) =>
            <ul>
                <li>{item.title}</li>
                <li>{item.cooktime}</li>
                <ul>
                    <li>{item.ingredient[0]}</li>
                    <li>{item.ingredient[1]}</li>
                </ul>
            </ul>
            )}
            </div>
        </div>
    )
}