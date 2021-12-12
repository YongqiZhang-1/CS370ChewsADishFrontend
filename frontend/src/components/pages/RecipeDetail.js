import '../../App.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import RandomBackground from './RandomBackground';

const RecipeDetail = () => {
    const { id } = useParams();
    const {data:recipe, isPending, error} = useFetch('http://localhost:3456/api/recipes/' + id);
    

    

    
    return (
        <div className='signup-wrap'>
            <RandomBackground/>
        <div className='recipe-detail'>
            { isPending && <div> Loading... </div> }
            { error && <div> {error} </div>}
            { recipe && (
                <article>
                    <h2> { recipe.name }</h2>
                    <h3> Date </h3>
                    <p> { recipe.creationDate.slice(0,10) } </p>
                    <h3> Difficulty </h3>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i+1
                        return <label>
                                    <FaStar className='star' size={30} color={recipe.difficulty >= ratingValue ? "#ffc107" : "#e4e5e9" }/>
                                </label>
                    })}
                    <br></br>
                    <p><img src={recipe.image}/></p>
                    <h3> Ingredients </h3>
                    <br></br>
                    { recipe.ingredients.map((ingredient) => (
                        <p>{ingredient}</p>
                    ))}
                    <br></br>
                    <h3> Instructions</h3>
                    <br></br>
                    <p> { recipe.instructions}</p>
                    <p>
                    <ReactPlayer url={recipe['video-url']} playing/> 
                    </p>         
                    <p> { recipe['video-url'] }</p>
                </article>
                )}
                <br/>
                <br/>
        </div>
        </div>
    );
}

export default RecipeDetail