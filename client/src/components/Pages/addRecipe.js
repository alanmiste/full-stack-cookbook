import React from "react";
import { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../Context/context'
import axios from 'axios'

export default function AddRecipe() {


    // const addRecipe = async ()=>{
    //     console.log('Hello from addRecipes')

    //     const search = '61dd94367da84425ef953d86'

    //     const data = await axios.get(`/recipes/find?_id=${search}`)

    //     console.log('data= ',data)
    // }


    const addRecipe = async () => {
        console.log('Hello from addRecipes')

        // "_id":{"$oid":"61db37f9ac938a7765f06767"}
        const recipe = {
            "title": "Test recipe",
            "ingredient": ["4 tbsp passata",
                "1 garlic clove , crushed"],
            "preparation": ["Heat the oven to 220C.",
                "Mix the passata, garlic, olive"],
            "published": false,
            "category": "pizza",
            "cooktime": "18 min",
            "description": "This is an extremely easy."
        }

        const response = await axios.post('/recipes/add', recipe)

        console.log('data= ', response)

        window.location.reload(false); //to refresh the page after the recipe has been added
    }

    //---------------------------------------------------------

    const [text, setText] = useState();

    const handleChange = (e) => {

        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }

    const [RName, setRName] = useState('');
    const [RDescription, setRDescription] = useState('');
    const [RIngredients2, setRIngredients2] = useState([]);
    const [RRreparation4, setRPreparation4] = useState([]);

    const [addPost, setAddPost] = useState(
        {
            'title': '',
            'ingredient': [],
            'preparation': [],
            'published': false,
            'category': '',
            'cooktime': '',
            'description': ''
        }
    );


    function setName() {
        setRName(text);
        document.getElementById('nameInput').value = '';
        // console.log('from setName',RName);
    }

    function setDescription() {
        setRDescription(text);
        document.getElementById('descriptionInput').value = '';
        // console.log('from setDescription ',RDescription)
    }

    // useEffect(() => setIngredients(), []);
    function setIngredients() {
        setRIngredients2(arr => [...arr, `${text}`]);
        document.getElementById('ingredientInput').value = '';
        document.getElementById("ingredientInput").focus();
        // console.log('from setIngredients',RIngredients2)
    }

    function setPreparation() {
        setRPreparation4(arr => [...arr, `${text}`]);
        document.getElementById('preparationInput').value = '';
        document.getElementById("preparationInput").focus();
        // console.log('from setPreparation',RRreparation4)
    }

    const [addCategory, setAddCategory] = useState('Random');
    function handleCategory(e) {
        setAddCategory(e.target.value);
        console.log(addCategory);
    }





    function handleClick() {

        console.log('handleclick')
        console.log('this is category ', addCategory)

    }



    return (
        <div>
            add Recipe
            <button onClick={addRecipe}>add Recipe</button>

            <div id="form">
                <h2 id="sBigger">Add New Recipe</h2>

                <div className="forFlexing">
                    <div className='inputForum'>

                        <div className='inputF'>
                            <label>Recipe Name: </label>
                            <input id='nameInput' type="text" onChange={handleChange}></input>
                            <button onClick={setName}>add Recipe name</button>
                        </div>
                        <div className='inputF'>
                            <label>Choose Category: </label>
                            <select
                                defaultValue={addCategory}
                                onChange={handleCategory}
                                className='inputF'
                            >
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="noodle">Noodle</option>
                                <option value="random">Random</option>
                            </select>
                        </div>
                        <div className='inputF'>
                            <label>Description: </label>
                            <textarea id='descriptionInput' name="message" rows="10" cols="30" onChange={handleChange}></textarea>
                            <button onClick={setDescription}>add Description</button>
                        </div>
                        <div className='inputF'>
                            <label>Ingredients: </label>
                            <input id='ingredientInput' type="text" onChange={handleChange}></input>
                            <button onClick={setIngredients}>add one</button>
                            <div id='ingShow'></div>
                        </div>
                        <div className='inputF'>
                            <label>Preparation: </label>
                            <input id='preparationInput' type="text" onChange={handleChange}></input>
                            <button onClick={setPreparation}>add one</button>
                        </div>
                        <div>
                            <button className='addRecipeBtn' onClick={handleClick}>Add Recipe</button>
                        </div>
                    </div>
                    <div className='Preview'>
                        <h3>Preview</h3>
                        <div className="preview">
                            <p>{RName}</p>
                            <p>{addCategory}</p>
                            <p>{RDescription}</p>
                            {/* <ul>{List(RIngredients2)}</ul>
                        <ol>{List(RRreparation4)}</ol> */}
                        </div></div>
                </div>
            </div>
        </div>

    )
}