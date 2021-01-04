import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import {editRecipe} from '../actions/editRecipe'
// import { Redirect } from 'reac-router-dom'


// //must pass in props when it's a functional component
const Recipe = (props) => {
   
    console.log(props)

    const handleDelete = (bookId, recipeId) => {
        props.deleteRecipe(bookId, recipeId)
    }

    const handleEdit = (bookId, recipeId) => {
        props.editRecipe(bookId, recipeId)
    }
    // parseInt(props.match.params.bookId) will give me the bookId "1" 
    //grab specific book by id props.match from current path - '/books/1'
    //have access to props.match because I passed routerProps in to the Router
    let recipe = props.recipes.find(recipe => recipe.id === parseInt(props.match.params.id))
    
    return (
        <div className="Recipe">
            <h2>{recipe ? recipe.name : "Nothing to see here..."}</h2>
            <button onClick={() => handleEdit(props.book.id, recipe.id)}>Edit</button>
            <button onClick={() => handleDelete(props.book.id, recipe.id)}>Delete</button>
        </div>
    )
}

export default connect(null, {deleteRecipe})(Recipe)


