// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { addRecipe } from '../actions/addRecipe'
import { editRecipe } from '../actions/editRecipe'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'


class RecipesInput extends React.Component {
   

    handleOnSubmit = event => {
        event.preventDefault();
        const recipeId = parseInt(event.target.id)
        const {editMode} = this.props;
        const name = this.nameRef.value
        const overview = this.descriptionRef.value
        const ingredients = this.ingredientsRef.value
        const cook_time = this.cookTimeRef.value
        const prep_time = this.prepTimeRef.value
        const instructions_1 = this.instructions1Ref.value
        const instructions_2 = this.instructions2Ref.value
        const instructions_3 = this.instructions3Ref.value
        const instructions_4 = this.instructions4Ref.value
        const instructions_5 = this.instructions5Ref.value
        const image_url = this.imageRef.value
        if (editMode) {
            const recipeData = {
                name,
                overview,
                image_url,
                ingredients, 
                cook_time, 
                prep_time, 
                instructions_1,
                instructions_2,
                instructions_3,
                instructions_4,
                instructions_5 
            }
            this.props.editRecipe(recipeData, recipeId, this.props.book.id)
            this.props.history.push(`/books/${this.props.book.id}/recipes/${recipeId}`);
        } else {
            const newRecipe = {
                name,
                overview,
                image_url,
                ingredients, 
                cook_time, 
                prep_time, 
                instructions_1,
                instructions_2,
                instructions_3,
                instructions_4,
                instructions_5, 
                editing: false
            }
            this.props.addRecipe(newRecipe, this.props.book.id)
            this.props.history.push(`/books/${this.props.book.id}/recipes`)
        }
    }

   
    

    render(){
        console.log(this.props)
        const {editMode} = this.props
        const recipe = this.props.editMode ? this.props.book.recipes.find(recipe => recipe.id === parseInt(this.props.match.params.id)) : this.props.recipe
        const pageTitle = editMode ? 'Edit Your Recipe' : 'Create Your Recipe';
        const buttonTitle = editMode ? 'Update' : 'Add';
        return(
            <div className="Recipes-Input">
                <form id={recipe.id} onSubmit={this.handleOnSubmit}>
                <h3 className="input-title">{pageTitle}</h3>
                    <label>Recipe Name</label><br/>
                    <input 
                        required
                        type="text" 
                        ref={input => this.nameRef = input}
                        name="name" 
                        placeholder="Give you Recipe a name" 
                        defaultValue={recipe.name}>
                    </input><br/>
                    <label>Image URL</label><br/>
                    <input 
                        required
                        type="text" 
                        ref={input => this.imageRef = input}
                        name="image_url" 
                        placeholder="Add a photo" 
                        defaultValue={recipe.image_url}>
                    </input><br/>
                    <label>Description</label><br/>
                    <input 
                        required
                        type="text"  
                        ref={input => this.descriptionRef = input}
                        name="overview" 
                        placeholder="Short description" 
                        defaultValue={recipe.overview}>
                    </input><br/>
                    <label>Ingredients</label><br/>
                    <input 
                        required
                        type="text"  
                        ref={input => this.ingredientsRef = input}
                        name="ingredients" 
                        placeholder="Ex) 2 Cups Chopped Carrots" 
                        defaultValue={recipe.ingredients}>
                    </input><br/>
                    <label>Cook Time</label><br/>
                    <input 
                        required
                        type="text"  
                        ref={input => this.cookTimeRef = input}
                        name="cook_time" 
                        placeholder="Ex) 30 minutes"
                        defaultValue={recipe.cook_time}>
                    </input><br/>
                    <label>Prep Time</label><br/>
                    <input 
                        required
                        type="text"
                        ref={input => this.prepTimeRef = input}  
                        name="prep_time" 
                        placeholder="Ex) 10 minutes"
                        defaultValue={recipe.prep_time}>
                    </input><br/>
                    <label>Instructions</label><br/>
                    <textarea
                        required
                        type="text" 
                        ref={input => this.instructions1Ref = input} 
                        name="instructions-1" 
                        placeholder="Step 1."
                        defaultValue={recipe.instructions_1}>
                    </textarea><br/>
                    <textarea
                        type="text" 
                        ref={input => this.instructions2Ref = input} 
                        name="instructions-2" 
                        placeholder="Step 2."
                        defaultValue={recipe.instructions_2}>
                    </textarea><br/>
                    <textarea
                        type="text" 
                        ref={input => this.instructions3Ref = input} 
                        name="instructions-3" 
                        placeholder="Step 3."
                        defaultValue={recipe.instructions_3}>
                    </textarea><br/>
                    <textarea
                        type="text" 
                        ref={input => this.instructions4Ref = input} 
                        name="instructions-4" 
                        placeholder="Step 4."
                        defaultValue={recipe.instructions_4}>
                    </textarea><br/>
                    <textarea
                        type="text" 
                        ref={input => this.instructions5Ref = input} 
                        name="instructions-5" 
                        placeholder="Step 5."
                        defaultValue={recipe.instructions_5}>
                    </textarea><br/>
                    <button type="submit">{buttonTitle}</button>
                </form>
               
            </div>
        )
    }
}

RecipesInput.propTypes = {
    editMode: PropTypes.bool,
    recipe: PropTypes.object
}

RecipesInput.defaultProps = {
    editMode: false,    // false: Create mode, true: Edit mode
    recipe: {
        id: "",
        name: "",
        overview: "",
        image_url: "",
        ingredients: "",
        cook_time: "",
        prep_time: "", 
        instructions_1: "",
        instructions_2: "",
        instructions_3: "",
        instructions_4: "",
        instructions_5: ""
    }    // Pass defined Post object in create mode in order not to get undefined objects in 'defaultValue's of inputs.
}


export default withRouter(connect(null, {addRecipe, editRecipe})(RecipesInput))