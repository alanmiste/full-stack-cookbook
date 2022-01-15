import react from 'react'
import {useParams} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import {RecipeContext} from '../Context/context'

export default function OneRecipe(){

    const {id} = useParams()
    const { recipes } = useContext(RecipeContext)

    console.log('this is id:',id )
    console.log('this is _id:', recipes[0]._id)
    
    if(id == recipes[0]._id){
        console.log('this is same')
    }else{console.log('from else')}

    const [recipe, setRecipe] = useState({})

    useEffect(()=>{
        const idx = recipes.findIndex(item => item._id === id)
        console.log('useEffect ', idx)
        setRecipe({...recipes[idx]})
    },[])
    console.log(recipes)

    return(
        <div>
            One Recipe
            <div>
            <div>{
                recipe.title
                }
            </div>
        </div>
            {/* <Recipes recipeId={id} /> */}
        </div>
    )
}

// recipes.map((item) => item._id == id ?
//                     <div>
//                         <h4>{item.title}</h4>
//                         <p>{item.ingredient}</p>
//                     </div>
//                 : <>Hiii</>)