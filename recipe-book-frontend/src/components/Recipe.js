import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import { Link, withRouter } from 'react-router-dom'



// //must pass in props when it's a functional component
const Recipe = (props) => {
   const {match, recipes} = props
   console.log("recipe props:", match, recipes)
    
   let recipe = recipes.find(recipe => recipe.id === parseInt(match.params.id))
   
    if (!recipe) {
        return (
          <section>
            <h2>Recipe not found!</h2>
          </section>
        )
      }
    console.log("In recipe.js", recipe)
   

    const handleDelete = (bookId, recipeId) => {
        props.deleteRecipe(bookId, recipeId)
        props.history.push(`/books/${bookId}/recipes`);
    }

    // parseInt(props.match.params.bookId) will give me the bookId "1" from the url 
    //so should I fetch the info i need to avoid losing everything on refresh
    //grab specific book by id props.match from current path - '/books/1'
    //have access to props.match because I passed routerProps in to the Router
    
  
    return (
        <div className="Recipe">
           <h2 className="Recipe-Name">{recipe.name}</h2>
           <sub className="overview">{recipe.overview}</sub>
           Cook Time: {recipe.prep_time} || Prep Time: {recipe.cook_time}
           
          {props.book ? <p><button onClick={() => handleDelete(props.book.id, recipe.id)}>Delete</button>
           <Link to={`/books/${props.book.id}/recipes/${recipe.id}/edit`} className="btn-edit">Edit</Link></p> : 
           null
          }
           <div className="recipe-image"><img src={recipe.image_url} alt={recipe.name}></img></div>
           <div className="recipe-ingredients">Ingredients: {recipe.ingredients.split(',').map(i => <li>{i}</li>)}</div>
           <div className="Instructions">
              Step 1: {recipe.instructions_1}
              Step 2: {recipe.instructions_2}
              Step 3: {recipe.instructions_3}
              Step 4: {recipe.instructions_4}
              Step 5: {recipe.instructions_5}
           </div>
           
        </div>  
    )
}

export default withRouter(connect(null, {deleteRecipe})(Recipe))


