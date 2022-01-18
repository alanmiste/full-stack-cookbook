import React from "react";
import Recipes from '../Recipes/recipes'
import { FaPizzaSlice } from 'react-icons/fa';

export default function Pizza(){
    return(
        <div>
            
            <h2><FaPizzaSlice/>. Pizza</h2> 
           
            <Recipes categoryType={'pizza'} />
        </div>
    )
}