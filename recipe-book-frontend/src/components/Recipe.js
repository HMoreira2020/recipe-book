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
      
      <div className="recipe">
          
          <div className="recipe-head">
            <h2 className="recipe-title">{recipe.name}</h2>
              <div className="recipe-description">{recipe.overview}</div>
              {book ? <p className="recipe-controls"><button onClick={() => handleDelete(book.id, recipe.id)}>Remove</button> |
                <button><Link to={`/books/${book.id}/recipes/${recipe.id}/edit`} className="btn-edit">Edit</Link></button></p> : 
              null
              }
          </div>
           <div className="recipe-body">
              <div className="recipe-info">
              <img src={recipe.image_url} alt={recipe.name}></img>
                  <div className="cook-time">Cook Time: {recipe.prep_time}</div> 
                  <div className="prep-time">Prep Time: {recipe.cook_time}</div>
              </div>

                
              <div className="recipe-instructions">
                  <div>
                    <h3 className="ingredients">Ingredients:</h3>
                      <ul>
                        {recipe.ingredients.split(',').map((i, index) => <li key={index}>{i}</li>)}
                      </ul>
                 
                
                  </div>
                    <h3 className="instructions">Instructions</h3>
                      <ul>
                        <li>Step 1: {recipe.instructions_1}</li>
                        {(recipe.instructions_2 !== "") ? <li>Step 2: {recipe.instructions_2}</li> : null}
                        {(recipe.instructions_3 !== "") ? <li>Step 3: {recipe.instructions_3}</li> : null}
                        {(recipe.instructions_4 !== "") ? <li>Step 4: {recipe.instructions_4}</li> : null}
                        {(recipe.instructions_5 !== "") ? <li>Step 5: {recipe.instructions_5}</li> : null}
                      </ul>
                  </div>
              </div>
        </div>  
    )
}

export default withRouter(connect(null, {deleteRecipe})(Recipe))


