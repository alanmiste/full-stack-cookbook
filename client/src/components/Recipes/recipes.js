import React from "react";
import { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../Context/context'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from '../Button/button'
import './recipes.css'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';


export default function Recipes({ categoryType }) {

    const { recipes } = useContext(RecipeContext) //fetch data from context.js

    const [recipe, setRecipe] = useState([]) //this state to save recipes in it locally

    useEffect(() => {
        setRecipe([...recipes.filter(item => item.category === categoryType)])
        //set the recipes in recipe after filtering it consider of category
    }, [])


    console.log('recipes component conext is', recipes)
    return (
        <div className="recipeTitle">{recipe?.map((item, id) => <div >
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
                    <Link key={item._id} to={`/oneRecipe/${item._id}`}>
                        <Button className={'btn'} name={'Read more'} />
                    </Link>
                </Card.Body>
            </Card>
        </div>

        )}

        </div>

    )
}