import React from 'react'
// import {connect} from 'react-redux'
// import {deleteRecipe} from '../actions/deleteRecipe'
import { Link } from 'react-router-dom'


//must pass in props when it's a functional component
const Recipes = (props) => {
    console.log(props)

    //have to define this method with a const keyword bc it's in a functional component 
    // const handleDelete = (bookId, recipeId) => {
    //     props.deleteRecipe(bookId, recipeId)
    // }
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
               {/* <button onClick={() => handleDelete(props.book.id, recipe.id)}>Delete</button> */}
            </li>)
            }

        </div>
    )
}

// export default connect(null, {deleteRecipe})(Recipes)
export default Recipes


