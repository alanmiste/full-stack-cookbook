import React from "react";
import Recipes from '../Recipes/recipes'
import { GiCakeSlice } from 'react-icons/gi';

export default function Dessert(){
    return(
        <div>
            <h2><GiCakeSlice/>. Dessert</h2>
            
            <Recipes categoryType={'dessert'} />
        </div>
    )
}