import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router';
import {useCookies} from 'react-cookie';
import useFetch from '../useFetch';

const CreateYourOwnRecipe = () => {
    const[name, setRecipeFor] = useState("");
    const[ingredient, setIngredients] = useState("");
    const[instructions, setInstructions] = useState("");
    const[Difficulty, setDifficulty] = useState("Medium");
    const[tag, setTags] = useState("");
    const[isPending, setIsPending] = useState(false)
    const history = useHistory();
    const [Cookies, setCookie, removeCookie] = useCookies();
    const _id = Cookies._id;
    const {data:userInfo, error} = useFetch('http://localhost:3456/api/userInfo/' + _id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredients = new Array(ingredient);
        const tags = new Array(tag);
        const recipe = {name, instructions, ingredients, tags};

        if(_id != null){
          const level = userInfo.level + 1;
          const UserInfo = {_id,
                            level};
          console.log(UserInfo);
          fetch("http://localhost:3456/api/userInfo/" + _id,{
          method:"PATCH",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(UserInfo)
        })
        }

        setIsPending(true);
        fetch("http://localhost:3456/api/recipes",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(recipe)
        }).then(() => {
          console.log(recipe);

          setIsPending(false);
          history.go(-1);
        })    
    }


    return(
        <div className="CreateYourOwnRecipe">
            <br></br>
            <br></br>
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe for:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setRecipeFor(e.target.value)}
                />
                <label>Ingredients:</label>
                <textarea
                  required
                  value={ingredient}
                  onChange={(e) => setIngredients(e.target.value)}>   
                </textarea>
                <label>Instructions:</label>
                <textarea
                  required
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}>
                </textarea>
                <label>Tags:</label>
                <textarea
                  required
                  value={tag}
                  onChange={(e) => setTags(e.target.value)}>
                </textarea>
                <label>Difficulty</label>
                <select
                  value={Difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Professional">Professional</option>
                </select>
                { !isPending && <button>submit</button>}
                { isPending && <button disabled>loading...</button>}
            </form>
        </div>

    )
}

export default CreateYourOwnRecipe;