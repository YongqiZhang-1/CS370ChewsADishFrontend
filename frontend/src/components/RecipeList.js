import { Link } from 'react-router-dom'
import '../App.css'

const RecipeList = (props) => {
    const Recipes = props.recipes 
    return(
        <div className="recipe-preview">
            {Recipes.map((recipe) => (
                <div className = "recipe-preview" key = {recipe.id}>
                    <Link to={`/Recipe/${recipe._id}`}>
                        <h2>{ recipe.name }</h2>
                    </Link>
                </div>   
            ))}
        </div>
    )
}

export default RecipeList