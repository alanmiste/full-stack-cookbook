import React from "react";
import { useContext } from 'react'
import { RecipeContext } from '../Context/context'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from '../Button/button'
import '../Recipes/recipes.css'
import { FiHome } from 'react-icons/fi';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import axios from 'axios'


export default function Delete(){

    const { recipes } = useContext(RecipeContext) //fetch data from context.js

    const handleDelete = async (idx)=>{

        const data = await axios.delete(`/recipes/delete?_id=${idx}`)
        // if(data.data.sucsess){
            
        // }
        console.log('idx is', idx)
    }

    return(
        <div>
            <h2><FiHome/>. Delete</h2>
            <div className="recipeTitle">{recipes?.map((item, id) => <div >
            <Card
                bg={'dark'}
                key={id}
                text={'light'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header className="cardHeader">{item.category==='pizza' ? <FaPizzaSlice/> : item.category==='dessert' ? <GiCakeSlice/> : <GiNoodles/> }</Card.Header>
                <Card.Body>
                    <Card.Title className="cardTitle"> {item.title} </Card.Title>
                    <Card.Text>
                        <div>{item.description}</div>
                        <div>Cook Time: {item.cooktime}</div>
                    </Card.Text>
                    <Link key={item._id} to={`/`}>
                        <Button className={'btn'} name={'Delete'} funOnClick={()=>handleDelete(item._id)}/>
                    </Link>
                </Card.Body>
            </Card>
        </div>

        )}

        </div>
        </div>
    )
}