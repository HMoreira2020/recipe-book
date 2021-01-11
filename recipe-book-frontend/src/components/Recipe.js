import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import { Link, withRouter } from 'react-router-dom'


const Recipe = ({match, recipes, history, book, deleteRecipe}) => {

   let recipe = recipes.find(recipe => recipe.id === parseInt(match.params.id))
   
    if (!recipe) {
        return (
          <section>
            <h2>Recipe not found!</h2>
          </section>
        )
      }

    const handleDelete = (bookId, recipeId) => {
        deleteRecipe(bookId, recipeId)
        history.push(`/books/${bookId}`);
    }

    return (
      <div className="recipe-card-container">
        <div className="card u-clearfix">
          <div class="card-body">
              <h2 className="card-title">{recipe.name}</h2>
                <span className="card-description">{recipe.overview}</span>
        </div>
      </div>
           
           <div className="recipe-time">Cook Time: {recipe.prep_time} || Prep Time: {recipe.cook_time}</div>
           
          {book ? <p className="recipe-controls"><button onClick={() => handleDelete(book.id, recipe.id)}>Remove</button>
           <button><Link to={`/books/${book.id}/recipes/${recipe.id}/edit`} className="btn-edit">Edit</Link></button></p> : 
           null
          }
           <img className="full-recipe-img" src={recipe.image_url} alt={recipe.name}></img>
           <div>Ingredients:</div>
              <ul>
              {recipe.ingredients.split(',').map((i, index) => <li key={index}>{i}</li>)}
              </ul>
          
           <div className="Instructions">
             <h3>Instructions</h3>
              <li>Step 1: {recipe.instructions_1}</li>
              <li>Step 2: {recipe.instructions_2}</li>
              <li>Step 3: {recipe.instructions_3}</li>
              <li>Step 4: {recipe.instructions_4}</li>
              <li>Step 5: {recipe.instructions_5}</li>
           </div>
           
        </div>  
    )
}

export default withRouter(connect(null, {deleteRecipe})(Recipe))


