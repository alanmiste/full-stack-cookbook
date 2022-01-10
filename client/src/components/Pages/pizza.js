import React from "react";
import axios from "axios";

export default function Pizza(){

    const handelClick = async ()=>{
        console.log('Hello from pizza button')

        const data = await axios.get('/')

        console.log('data is: ',data)
    }
    return(
        <div>
            Pizza
            <button onClick={handelClick}>click me</button>
        </div>
    )
}