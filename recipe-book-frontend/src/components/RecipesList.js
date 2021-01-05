import React from 'react' 
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {Route, Link} from 'react-router-dom'
import Recipe from './Recipe'

class RecipesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchRecipes()
    }
    //is passed the book info from the book component
    render() {
        
        console.log(this.props)
        return (
            <div className="Recipes-List">

                <Route path='recipes/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={this.props.recipes}/>} /> 

                {this.props.recipes && this.props.recipes.map(recipe => 
            <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
                )
            }


            </div>
        )
    }

    
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer)
