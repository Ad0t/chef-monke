import React from "react"
import { useState, useEffect } from "react"
import './content.css'
import Recipe from "./recipe"
import IngredientsList from "./ingredientsList"
import { getRecipeFromMistral } from "./ai"

function Content() {

    // const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [ingredients, setIngredients] = useState([])

    const [recipe, setRecipe] = useState("")
    const recipeSection = React.useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behaviour: "smooth"})
        }
    }, [recipe]) 

    async function getRecipe () {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        console.log(recipeMarkdown)
    }
 
    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const newIngredient = formData.get("ingredient")
        // ingredients.push(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        formEl.reset()
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form'>
                <input
                    type="text"
                    placeholder='e.g. oregano'
                    aria-label='Add ingredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? 
                <IngredientsList
                    ref={recipeSection} 
                    ingredients={ingredients} 
                    getRecipe={getRecipe} 
                /> 
            : null}
            {recipe ? <Recipe recipe={recipe} /> : null}
        </main>
    )
}

export default Content