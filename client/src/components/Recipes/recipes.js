import React from "react";
import { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../Context/context'
import { Link } from "react-router-dom";
// import Accordion from 'react-bootstrap/Accordion'
import Placeholder from 'react-bootstrap/Placeholder'
import Card from 'react-bootstrap/Card'

import Button from '../Button/button'
import './recipe.css'

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

            {/* <Accordion>
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            This recipe will take about {item.cooktime} to be ready.
                        </div>
                        <Link key={item._id} to={`/oneRecipe/${item._id}`}>
                            <Button name={'Read more...'} />
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}

            <Card
                bg={'dark'}
                key={id}
                text={'light'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>{item.category}</Card.Header>
                <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>
                    This recipe will take about {item.cooktime} to be ready.
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