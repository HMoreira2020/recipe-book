// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { addRecipe } from '../actions/addRecipe'


class RecipesInput extends React.Component {
    state = {
        name: "",
        overview: "",
        image_url: "",
        ingredients: "",
        cook_time: "",
        prep_time: "", 
        instructions: ""
    }
    //controlled form means values held in state 

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
     }


    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state)
        //onsubmit sends state/new book to addBook action creator
        this.setState({
            name: "",
            overview: "",
            image_url: "",
            ingredients: "",
            cook_time: "",
            prep_time: "", 
            instructions: ""
        })
    }
    

    render(){
        return(
            <div className="Recipes-Input">
                <h4>Add a New Recipe to Your Book</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe Name</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="name" 
                        placeholder="Give you Recipe a name" 
                        value={this.state.name}>
                    </input><br/>
                    <label>Image URL</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="image_url" 
                        placeholder="Add a photo" 
                        value={this.state.image_url}>
                    </input><br/>
                    <label>Description</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="overview" 
                        placeholder="Short description" 
                        value={this.state.overview}>
                    </input><br/>
                    <label>Ingredients</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="ingredients" 
                        placeholder="Ex) 2 Cups Chopped Carrots" 
                        value={this.state.ingredients}>
                    </input><br/>
                    <label>Cook Time</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="cook_time" 
                        placeholder="Ex) 30 minutes"
                        value={this.state.cook_time}>
                    </input><br/>
                    <label>Prep Time</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="prep_time" 
                        placeholder="Ex) 10 minutes"
                        value={this.state.prep_time}>
                    </input><br/>
                    <label>Instructions</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="instructions" 
                        placeholder="Instructions for your recipe"
                        value={this.state.instructions}>
                    </input><br/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         books: state.books 
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addBook: (book) => dispatch(addBook(book))
//     }
// }


export default connect(null, {addRecipe})(RecipesInput)