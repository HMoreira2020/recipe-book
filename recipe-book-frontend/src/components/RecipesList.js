import React from 'react'
import { Link } from 'react-router-dom'

const RecipesList = (props) => {
    return (
        <div className="Recipes-List-Container">
            <h1 className="recipes-list-title">Recipes</h1>
            <div className="recipes-grid-container">
            {props.recipes && props.recipes.map(recipe => 
                <div className="recipe-grid-item" key={recipe.id}>
                    <div className="card u-clearfix">
                        <h2 className="recipe-title">{recipe.name}</h2>
                        <span className="recipe-description">{recipe.overview}</span>
                        <Link to={`/recipes-list/${recipe.id}`}>Read</Link>
                
                    {/* <img className="recipe-card-media" src={recipe.image_url} alt={recipe.name}></img> */}
                </div>
            </div>
            )}
        </div>
       </div>
    )
}

export default RecipesList