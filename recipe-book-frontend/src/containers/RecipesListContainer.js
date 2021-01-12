import React from 'react' 
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {Route, Link} from 'react-router-dom'
import Recipe from '../components/Recipe'

class RecipesListContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchRecipes()
    }
    
    render() {
        console.log(this.props)
        return (
            <div className="recipes-grid-container">
            <Route path='/recipes-list/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={this.props.recipes}/>} />

            {this.props.recipes && this.props.recipes.map((recipe, index) => 
                <div className="recipe-grid-item" key={recipe.id}>
                    <div className="card u-clearfix">
                       
                            <span className="card-number card-circle subtle">{index + 1}</span>
                            <span className="card-book-title subtle"></span>
                            <h2 className="card-title">{recipe.name}</h2>
                            <span className="card-description">{recipe.overview}</span>
                            <div className="card-read"><Link to={`/recipes-list/${recipe.id}`}>Read</Link></div>
                    
                        {/* <img className="recipe-card-media" src={recipe.image_url} alt={recipe.name}></img> */}
                    </div>
                    <div className="card-shadow"></div>
                </div>
            )}
            </div>
            // <div className="recipe-cards">
            // <Route path='/recipes-list/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={this.props.recipes}/>} />
            
            // <h1>All Recipes</h1>
            //     {this.props.recipes && this.props.recipes.map(recipe => 
            // <div class="container" key={recipe.id}>
            //     <img className="image" src={recipe.image_url} alt={recipe.name}></img>
            //     <Link to={`/recipes-list/${recipe.id}`}>
            //         <div class="middle">
            //             <div class="text">{recipe.name}</div>
            //         </div>
            //     </Link>
            // </div>
            //     )
            // }


            // </div>
        )
    }

   
    
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesListContainer)


{/* <div className="recipes-cards">
<Route path='/recipes-list/:id' render={(routerProps)=> <Recipe {...routerProps} recipes={this.props.recipes}/>} />

            {this.props.recipes && this.props.recipes.map((recipe, index) => 
                <div className="recipe-card-container" key={recipe.id}>
                    <div className="card u-clearfix">
                        <div class="card-body">
                            <span class="card-number card-circle subtle">{index + 1}</span>
                            <span class="card-book-title subtle"></span>
                            <h2 className="card-title">{recipe.name}</h2>
                            <span className="card-description">{recipe.overview}</span>
                            <div class="card-read"><Link to={`/recipes-list/${recipe.id}`}>Read</Link></div>
                        </div>
                        {/* <img className="recipe-card-media" src={recipe.image_url} alt={recipe.name}></img> */}
            //         </div>
            //         <div class="card-shadow"></div>
            //     </div>
            // )}
            // </div> */}