import { useEffect, useState } from "react"
import RecipeList from "../RecipeList"


const Recipes = () => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3456/api/recipes')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRecipes(data)
            })
    }, []);

    return(
        <div className="Recipes">
            { recipes && <RecipeList recipes =  {recipes}/> }
        </div>
    )

}

export default Recipes