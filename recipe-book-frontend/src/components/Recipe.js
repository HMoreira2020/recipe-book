import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import { Link, withRouter } from 'react-router-dom'



// //must pass in props when it's a functional component
const Recipe = (props) => {
   console.log("recipe props:", props)

   

    const handleDelete = (bookId, recipeId) => {
        props.deleteRecipe(bookId, recipeId)
    props.history.push(`/books/${bookId}/recipes`);
    }

    

    // parseInt(props.match.params.bookId) will give me the bookId "1" from the url 
    //so should I fetch the info i need to avoid losing everything on refresh
    //grab specific book by id props.match from current path - '/books/1'
    //have access to props.match because I passed routerProps in to the Router
    let recipe = props.recipes.find(recipe => recipe.id === parseInt(props.match.params.id))
    
    console.log("In recipe container, recipe:", recipe)
    console.log("book Id", props.book.id)
  
    return (
        <div className="Recipe">
            <h2>{recipe ? recipe.name : "Nothing to see here..."}</h2>
            <button onClick={() => handleDelete(props.book.id, recipe.id)}>Delete</button>
            <Link to={`/books/${props.book.id}/recipes/${recipe.id}/edit`}>Edit</Link>
            {/* if recipe, render link otherwise render redirect component with desired url  */}
        </div>
    )
}

export default withRouter(connect(null, {deleteRecipe})(Recipe))


