import React from 'react'
import { Link } from 'react-router-dom'


//must pass in props when it's a functional component
const Recipes = (props) => {
    console.log("Recipes component props:", props)
    //rendering a books recipes
    //first time this runs or when refreshed the recipes are undefined because store and state have not been updated 
    //any time we refresh the BooksContainer will remount and in the componentDidMount the books are fetched and store updated
    return (
        
        <div className="Recipes">
           <h3>Table of Contents</h3>
           {/* //link to new recipe page */}
           <div className="new-recipes-link">
                <Link to={`/books/${props.book.id}/recipes/new`}>Add a New Recipe</Link>
            </div>
           {/* iterate through the books recipes and display a link to the recipe */}
           {props.recipes && props.recipes.map(recipe => 
            <li key={recipe.id}>
                <Link to={`/books/${props.book.id}/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
                )
            }

        </div>
    )
}

export default Recipes


