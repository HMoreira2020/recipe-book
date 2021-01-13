import React from 'react'
import { Link } from 'react-router-dom'

const RecipesList = (props) => {
    return (
        <div className="Recipes-List-Container">
            <h1 className="recipes-list-title">Recipes</h1>
            <div className="recipes-grid-container">
            {props.recipes && props.recipes.map(recipe => 
                <div className="recipe-grid-item" key={recipe.id}>
                    <Link className="recipes-list-link" to={`/recipes-list/${recipe.id}`}>
                        <img className="grid-recipe-image" src={recipe.image_url} alt={recipe.name}></img>
                        <div className="recipe-grid-title-middle">
                            <div className="recipe-grid-name">{recipe.name}</div>
                        </div>
                    </Link>
                </div>
            
            )}
        </div>
       </div>
    )
}

export default RecipesList