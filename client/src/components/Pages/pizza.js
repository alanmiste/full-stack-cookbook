import React from "react";
import Recipes from '../Recipes/recipes'


export default function Pizza(){
    return(
        <div className="pizza">
            <div>
            <h2>Pizza</h2> 
            </div>
            <Recipes categoryType={'pizza'} />
        </div>
    )
}