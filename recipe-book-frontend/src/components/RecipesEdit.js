// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { editRecipe } from '../actions/editRecipe'


class RecipesEdit extends React.Component {
    state = {
        id: "",
        name: "",
        overview: "",
        image_url: "",
        ingredients: "",
        cook_time: "",
        prep_time: "", 
        instructions: ""
        
    }
    //controlled form means values held in state 

    componentDidMount(){
        this.findRecipe()
    }

    handleChange = event => {
        //add the brackets around event.target.name tells app to evaluate what's in the brackets first
        this.setState({
            [event.target.name]: event.target.value
        })
     }


    handleOnSubmit = event => {
        event.preventDefault();
        this.props.editRecipe(this.state)
        //onsubmit sends state/new book to editRecipe action creator
        this.props.resetRecipeId()
    }

    findRecipe = () => {
        const { recipes, recipeId } = this.props
        const recipe= recipes.find(recipe => recipe.id === recipeId)
        this.setState({
        id: recipe.id,
        name: recipe.name,
        overview: recipe.overview,
        image_url: recipe.image_url,
        ingredients: recipe.ingredients,
        cook_time: recipe.cook_time,
        prep_time: recipe.prep_time,
        instructions: recipe.instructions
        })
        }
    

    render(){
        
        return(
            <div className="Recipes-Input">
                <h4>Edit Recipe</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe Name</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="name" 
                        placeholder={this.state.name}
                        value={this.state.name}>
                    </input><br/>
                    <label>Image URL</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="image_url" 
                        placeholder="" 
                        value={this.state.image_url}>
                    </input><br/>
                    <label>Description</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="overview" 
                        placeholder="" 
                        value={this.state.overview}>
                    </input><br/>
                    <label>Ingredients</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="ingredients" 
                        placeholder="" 
                        value={this.state.ingredients}>
                    </input><br/>
                    <label>Cook Time</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="cook_time" 
                        placeholder=""
                        value={this.state.cook_time}>
                    </input><br/>
                    <label>Prep Time</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="prep_time" 
                        placeholder=""
                        value={this.state.prep_time}>
                    </input><br/>
                    <label>Instructions</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="instructions" 
                        placeholder=""
                        value={this.state.instructions}>
                    </input><br/>
                    <input type="submit" value='Update Recipe'></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { recipes: state.recipes }
    }


export default connect(mapStateToProps, {editRecipe})(RecipesEdit)