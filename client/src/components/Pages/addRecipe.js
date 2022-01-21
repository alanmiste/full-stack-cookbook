import React from "react";
import { useState } from 'react'
import './addRecipe.css'
import axios from 'axios'
import Button from '../Button/button'
import { TiDelete } from 'react-icons/ti';

export default function AddRecipe() {


    // const addRecipe = async ()=>{
    //     console.log('Hello from addRecipes')

    //     const search = '61dd94367da84425ef953d86'

    //     const data = await axios.get(`/recipes/find?_id=${search}`)

    //     console.log('data= ',data)
    // }


    /* const addRecipe = async () => {
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
    } */

    //---------------------------------------------------------

    const [text, setText] = useState();

    const handleChange = (e) => {

        e.preventDefault()
        console.log(e.target.value)
        setText(e.target.value)
    }

    const [recipeTitle, setRecipeTitle] = useState('');
    const [RDescription, setRDescription] = useState('');
    const [RIngredients, setRIngredients] = useState([]);
    const [RPreparation, setRPreparation] = useState([]);
    const [addCategory, setAddCategory] = useState('Random');

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
        setRecipeTitle(text);
        document.getElementById('nameInput').value = '';
        // console.log('from setName',recipeTitle);
    }

    function setDescription() {
        setRDescription(text);
        document.getElementById('descriptionInput').value = '';
        // console.log('from setDescription ',RDescription)
    }

    // useEffect(() => setIngredients(), []);
    function setIngredients() {
        setRIngredients(arr => [...arr, `${text}`]);
        document.getElementById('ingredientInput').value = '';
        document.getElementById("ingredientInput").focus();
        // console.log('from setIngredients',RIngredients2)
    }

    function setPreparation() {
        setRPreparation(arr => [...arr, `${text}`]);
        document.getElementById('preparationInput').value = '';
        document.getElementById("preparationInput").focus();
        // console.log('from setPreparation',RPreparation)
    }


    function handleCategory(e) {
        setAddCategory(e.target.value);
        console.log(addCategory);
    }


    const ingredientsList = (arrayItem) => {

        console.log(arrayItem)
        return arrayItem.map((item, id) => (
            <li key={id}>
                {item}
                <span className="deleteMe" onClick={() => {
                    const oldData = [...RIngredients]
                    oldData.splice(id, 1)
                    setRIngredients([...oldData])
                }}><TiDelete /></span>
            </li>
        ))
    }


    const reparationList = (RPreparationItem) => {

        console.log(RPreparationItem)
        return RPreparationItem.map((item, id) => (
            <li key={id}>
                {item}
                <span className="deleteMe" onClick={() => {
                    const oldRPreparation = [...RPreparation]
                    oldRPreparation.splice(id, 1)
                    setRPreparation([...oldRPreparation])
                }}><TiDelete /></span>
            </li>
        ))
    }



    const handleClick = async () => {

        /* console.log('handleclick')

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

        console.log('data= ', response) */

        const recipe = {
            'title': recipeTitle,
            'ingredient': RIngredients,
            'preparation': RPreparation,
            'published': false,
            'category': addCategory,
            'cooktime': '15 min',
            'description': RDescription
        }

        console.log('last state: ', recipe)

        const response = await axios.post('/recipes/add', recipe)

        console.log('data= ', response)

        window.location.reload(false);

    }



    return (
        <div>
            {/*  add Recipe
            <button onClick={addRecipe}>add Recipe</button> */}
            <h2>Add New Recipe</h2>

            <div className="form" id="form">

                <div className="forFlexing">
                    <div className='inputForum'>

                        <div className='inputF'>
                            <label>Recipe Title: </label>
                            <input id='nameInput' type="text" onChange={handleChange}></input>
                            <Button funOnClick={setName} name={'add Title'} />
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
                            <textarea id='descriptionInput' name="message" rows="5" cols="30" onChange={handleChange}></textarea>
                            <Button funOnClick={setDescription} name={'add Description'} />
                        </div>
                        <div className='inputF'>
                            <label>Ingredients: </label>
                            <input id='ingredientInput' type="text" onChange={handleChange}></input>
                            <Button funOnClick={setIngredients} name={'add one'} />
                            <div id='ingShow'></div>
                        </div>
                        <div className='inputF'>
                            <label>Preparation: </label>
                            <input id='preparationInput' type="text" onChange={handleChange}></input>
                            <Button funOnClick={setPreparation} name={'add one'} />
                        </div>
                    </div>
                    <div>
                        <h3>Preview</h3>
                        <div>
                            <div className="preview">
                                <p>Title:</p>
                                <p className="listItem">{recipeTitle}</p>
                            </div>
                            <div className="preview">
                                <p>Recipe Category:</p>
                                <p className="listItem">{addCategory}</p>
                            </div>
                            <div className="preview">
                                <p>Recipe Description:</p>
                                <p className="listItem">{RDescription}</p>
                            </div>
                            <div className="preview">
                                <p>Ingredients</p>
                                <ul className="listItem">{ingredientsList(RIngredients)}</ul>
                            </div>
                            <div className="preview">
                                <p>Preparation</p>
                                <ol className="listItem">{reparationList(RPreparation)}</ol>
                            </div>
                            <div>
                                <Button className='addRecipeBtn' funOnClick={handleClick} name={'Add Recipe'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}