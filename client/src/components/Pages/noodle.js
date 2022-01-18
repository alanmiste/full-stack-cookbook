import React from "react";
import Recipes from '../Recipes/recipes'
import { GiNoodles } from 'react-icons/gi';

export default function Noodle(){
    
    return(
        <div>
            <h2><GiNoodles/>. Noodle</h2>
            
            <Recipes categoryType={'noodle'} />
        </div>
    )
}