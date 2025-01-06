import './ingredientsList.css'

function IngredientsList(props) {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{capitalizeFirstLetter(ingredient)}</li>
    ))

    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list">
                    {ingredientsListItems}
                </ul>
                {props.ingredients.length > 3 ? <div className="getRecipe">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div> : null}
        </section>
    )
}

export default IngredientsList