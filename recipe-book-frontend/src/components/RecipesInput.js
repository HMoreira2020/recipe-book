// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { addRecipe } from '../actions/addRecipe'
import { editRecipe } from '../actions/editRecipe'
import PropTypes from 'prop-types';


class RecipesInput extends React.Component {
   

    handleOnSubmit = event => {
        event.preventDefault();
        const {editMode, recipe} = this.props;
        const name = this.nameRef.value
        const overview = this.descriptionRef.value
        const ingredients = this.ingredientsRef.value
        const cook_time = this.cookTimeRef.value
        const prep_time = this.prepTimeRef.value
        const instructions = this.instructionsRef.value
        const image_url = this.imageRef.value
        if (editMode) {
            const recipeData = {
                name,
                overview,
                image_url,
                ingredients, 
                cook_time, 
                prep_time, 
                instructions   
            }
            this.props.editRecipe(recipeData, recipe.id)
        } else {
            const newRecipe = {
                name,
                overview,
                image_url,
                ingredients, 
                cook_time, 
                prep_time, 
                instructions, 
                editing: false
            }
            this.props.addRecipe(newRecipe, this.props.book.id)
        }
    }

   
    

    render(){
        console.log("recipes input props:", this.props)
        const {editMode} = this.props
        console.log("edit mode", editMode)
        const recipe = this.props.editMode ? this.props.book.recipes.find(recipe => recipe.id === parseInt(this.props.match.params.id)) : this.props.recipe
        console.log("recipe", this.props.recipe)
        const pageTitle = editMode ? 'Edit Recipe' : 'Create Recipe';
        const buttonTitle = editMode ? 'Update' : 'Add';
        return(
            <div className="Recipes-Input">
                <h4>{pageTitle}</h4>
                <form onSubmit={this.handleOnSubmit}>
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
                        ref={input => this.instructionsRef = input} 
                        name="instructions" 
                        placeholder="Instructions for your recipe"
                        defaultValue={recipe.instructions}>
                    </textarea><br/>
                    <input type="submit" value={buttonTitle}></input>
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
        name: "",
        overview: "",
        image_url: "",
        ingredients: "",
        cook_time: "",
        prep_time: "", 
        instructions: ""
    }    // Pass defined Post object in create mode in order not to get undefined objects in 'defaultValue's of inputs.
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addRecipe: (recipe) => dispatch(addRecipe(recipe))
//     }
// }


export default connect(null, {addRecipe, editRecipe})(RecipesInput)