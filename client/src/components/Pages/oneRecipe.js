import react from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../Context/context'
import './oneRecipe.css'

export default function OneRecipe() {

    const { id } = useParams() //to get the id from the url
    const { recipes } = useContext(RecipeContext) //get data from context.js

    const [recipe, setRecipe] = useState({}) //to save recipes in it locally depending on id

    useEffect(() => {
        const idx = recipes.findIndex(item => item._id === id) /* Comparison of item._id which is 
        the base id for the recipe that comes from the database via context, 
        and the id that comes from the link via url, and save the index of recipe resulting from 
        the comparison in idx. */
        //now idx = 1 or 2 or 3 or...., depends on the comparison result
        console.log('useEffect ', idx)
        setRecipe({ ...recipes[idx] })
    }, [])
    console.log('this is recipe', recipe)

    return (
        <div>
            <h3>{recipe.title}</h3>
            <div className='recipeDetails'>
                <div className='ingredient'>
                    <h5>Ingredient</h5>
                    {
                        recipe.ingredient?.map(
                            item => <ul>
                                <li>{item}</li>
                            </ul>)
                    }
                </div>
                <div className='preparation'>
                    <h5>Preparation</h5>
                    {
                        recipe.preparation?.map(
                            item => <ul>
                                <li> {item} </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
