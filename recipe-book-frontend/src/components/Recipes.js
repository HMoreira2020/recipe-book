import React from 'react'
import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Recipes = (props) => {

    return (
        <div className="Books">
           <h1>Recipes</h1>
            {props.recipes.map(recipe => 
            <div key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </div>)}
        </div>
    )
}

export default Recipes