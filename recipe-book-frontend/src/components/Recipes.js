import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = ({recipes, book}) => {
    return (
        <div class="recipes">
           <h3 className="table-of-contents">Table of Contents</h3>
           <div className="recipes-links">
                {recipes && recipes.map((recipe, index) => 
                    <div className="recipe-card-container" key={recipe.id}>
                        <span className="card-number card-circle subtle">{index + 1}</span>
                        <Link to={`/books/${book.id}/recipes/${recipe.id}`}>
                            <h2 className="recipe-card-title">{recipe.name}</h2>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recipes

