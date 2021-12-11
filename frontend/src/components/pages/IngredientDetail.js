import '../../App.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from 'react-router-dom';

const IngredientDetail = () => {
    const { id } = useParams();
    const {data:ingredient, isPending, error} = useFetch('http://localhost:3456/api/substitution/' + id)


    
    return (
        <div className='recipe-detail'>
            { isPending && <div> Loading... </div> }
            { error && <div> {error} </div>}
            { ingredient && (
                <article>
                    <h2> { ingredient.ingredient }</h2>
                    <br></br>
                    <h3> Substitution </h3>
                    <br></br>
                        <p>{ingredient.substitution}</p>
                    <br></br>
                    <h3> Substitution Link</h3>
                    <br></br>
                    <a target="_blank" href={ingredient.sub_website}> { ingredient.sub_website}</a>
                </article>
                )}
        </div>
    );
}

export default IngredientDetail;