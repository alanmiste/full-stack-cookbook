import React from "react";
import Recipes from '../Recipes/recipes'

export default function Dessert(){
    return(
        <div>
            Dessert
            <Recipes categoryType={'dessert'} />
        </div>
    )
}