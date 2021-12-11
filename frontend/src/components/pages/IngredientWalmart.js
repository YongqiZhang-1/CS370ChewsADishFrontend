import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useHistory } from 'react-router';
import useFetch from '../useFetch';
import RandomBackground from './RandomBackground';


const IngredientWalmart = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [result, setResult] = useState(null);
    const history = useHistory();

    const {data:ingredients, isPending, error} = useFetch('http://localhost:3456/api/substitution/')

    const handleSubmit = (e) => {
        e.preventDefault();
        redirect();
    }

    var twoCalls = (e) => {
        setSearchTerm(e.target.value);
        setResult(getObjectByValue(ingredients, 'ingredient', e.target.value));
        console.log(searchTerm);
        console.log(result)
    }

    var getObjectByValue = function (array, key, value) {
        return array.filter(function (object) {
            return object[key].toLowerCase() === value.toLowerCase();
        });
    };

    function redirect(){
        if(result.length == 0 || result == null) {return window.open(`https://www.walmart.com/search?query=${searchTerm}&search_redirect=false`);}
        else {return history.push(`/ingredient/${result[0]._id}`);}
    }


    return(
        <div className='signup-wrap'>
            <RandomBackground/>
        <div className="CreateYourOwnRecipe">
            <br></br>
            <br></br>
            { isPending && <div> Loading... </div> }
            { error && <div> {error} </div>}
            { ingredients && (
                <div>
                <h2>Search for Ingredients</h2>
                <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  placeholder="please input ingredients"
                  value={searchTerm}
                  onChange={twoCalls}
                />
                <button>Submit</button>
            </form>
            </div>
            )}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        </div>
            
  
    )
}

export default IngredientWalmart