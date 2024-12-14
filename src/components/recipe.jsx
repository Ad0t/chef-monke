import './recipe.css'
import ReactMarkdown from "react-markdown"


function Recipe(props) {
    return(
        <section>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default Recipe