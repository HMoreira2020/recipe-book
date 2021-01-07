import React from 'react' 
import RecipesInput from '../components/RecipesInput'
import Recipes from '../components/Recipes'
import Recipe from '../components/Recipe'
import {Route, Switch} from 'react-router-dom'


class RecipesContainer extends React.Component {
   
    //is passed the book info from the book component
    render() {
        
        console.log(this.props)
        return (
            <div className="Recipes-Container">
             <Switch> 
                    <Route path='/books/:bookId/recipes/:id/edit' render={(routerProps)=> <RecipesInput {...routerProps} book={this.props.book} editMode={true} />}  /> 
                    <Route path='/books/:bookId/recipes/new' render={(routerProps)=> <RecipesInput {...routerProps} book={this.props.book} editMode={false} />}  />
                    <Route path='/books/:bookId/recipes/:id' render={(routerProps)=> <Recipe {...routerProps} book={this.props.book} recipes={this.props.book.recipes}/>} /> 
                </Switch> 
               {/* render the recipes component that renders each recipe as a link */}
                <Recipes book={this.props.book} recipes={this.props.book && this.props.book.recipes}/> 

            </div>
        )
    }

    
}


export default RecipesContainer



           