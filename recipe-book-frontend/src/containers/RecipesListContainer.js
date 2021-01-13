import React from 'react' 
import Recipe from '../components/Recipe'
import RecipesList from '../components/RecipesList'
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {Route, Switch} from 'react-router-dom'


class RecipesListContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchRecipes()
    }
    
    render() {
        return (
            <div className="Recipes-List-Container">
                <Switch>
                    <Route path='/recipes-list/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={this.props.recipes}/>} />
                    <Route path='/recipes-list' render={(routerProps)=> <RecipesList {...routerProps} recipes={this.props.recipes}/>} />
                </Switch>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesListContainer)


