import React from "react";
import axios from "axios";
import {useState} from 'react'

export default function Pizza(){

    const [recipes, setRecipes]= useState([]);

    const handelClick = async ()=>{
        console.log('Hello from pizza button')

        const response = await axios.get('/recipes?category=pizza')
        setRecipes([...response.data])
        console.log('data is: ',response.data)
        // console.log(recipes)
    }
    return(
        <div>
            Pizza
            <button onClick={handelClick}>click me</button>
        </div>
    )
}