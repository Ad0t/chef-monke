import './recipe.css'
import ReactMarkdown from "react-markdown"


function Recipe(props) {
    return(
        <section className='recipeBox'>
            <h2>Chef Monke Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default Recipe