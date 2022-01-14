import react from 'react'
import Recipes from '../Recipes/recipes'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import {RecipeContext} from '../Context/context'

export default function OneRecipe(){

    const {id} = useParams()
    const { recipes } = useContext(RecipeContext)
    console.log('this is id:', id)
    console.log('this is _id:', recipes[0]._id)

    return(
        <div>
            One Recipe
            <div>
            <div>{recipes.map((item) => item._id == id ?
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.ingredient}</p>
                    </div>
                : <>Hiii</>)}
            </div>
        </div>
            {/* <Recipes recipeId={id} /> */}
        </div>
    )
}