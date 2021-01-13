import React from 'react' 
import RecipesInput from '../components/RecipesInput'
import Recipes from '../components/Recipes'
import Recipe from '../components/Recipe'
import {Route, Switch} from 'react-router-dom'


class RecipesContainer extends React.Component {
   
    
    render() {
        const {book} = this.props
        return (
            <div className="Recipes-Container">
             <Switch> 
                    <Route path='/books/:bookId/recipes/:id/edit' render={(routerProps)=> <RecipesInput {...routerProps} book={book} editMode={true} />}  /> 
                    <Route path='/books/:bookId/recipes/new' render={(routerProps)=> <RecipesInput {...routerProps} book={book} editMode={false} />}  />
                    <Route path='/books/:bookId/recipes/:id' render={(routerProps)=> <Recipe {...routerProps} book={book} recipes={book.recipes}/>} /> 
                </Switch> 
               
                <Recipes book={book} recipes={book && book.recipes}/> 

            </div>
        )
    }

    
}


export default RecipesContainer



           