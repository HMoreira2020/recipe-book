import React from 'react' 
import Recipe from '../components/Recipe'
import RecipesList from '../components/RecipesList'
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {Route, Switch} from 'react-router-dom'


class RecipesListContainer extends React.Component {
    state = {
        query: ""
    }
    
    componentDidMount(){
        this.props.fetchRecipes()
    }

    search = (query) => {
        this.setState({
            query: query
        })
    }
    
    render() {
        const {recipes} = this.props
        return (
            <div className="Recipes-List-Container">
                <Switch>
                    <Route path='/recipes-list/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={recipes}/>} />
                    <Route path='/recipes-list' render={(routerProps)=> <RecipesList {...routerProps} recipes={recipes}/>} />
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


