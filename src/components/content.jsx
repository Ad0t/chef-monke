import React from "react"
import { useState, useEffect } from "react"
import './content.css'
import Recipe from "./recipe"
import IngredientsList from "./ingredientsList"
import CharacterChanger from "./loading";
import { getRecipeFromMistral } from "./ai"

function Content() {

    // const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [ingredients, setIngredients] = useState([])

    const [recipe, setRecipe] = useState("")
    const [isFetchingRecipe, setIsFetchingRecipe] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const recipeSection = React.useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behaviour: "smooth"})
        }
    }, [recipe]) 

    async function getRecipe () {
        setIsFetchingRecipe(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
        setIsFetchingRecipe(false);
        console.log(recipeMarkdown)
    }
 
    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const newIngredient = formData.get("ingredient")
        // ingredients.push(newIngredient)
        if (newIngredient) {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        }
        formEl.reset()
        setInputValue("");
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form'>
                <input
                    type="text"
                    placeholder='e.g. oregano'
                    aria-label='Add ingredient'
                    name='ingredient'
                    required
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
            {isFetchingRecipe ? <CharacterChanger /> : null}
            {recipe ? <Recipe recipe={recipe} /> : null}
        </main>
    )
}

export default Content