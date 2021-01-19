import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

class RecipesList extends React.Component {
    
    state = {
        query: ""
    }

    filterRecipes = (recipes, query) => {
        if (!query) {
            return recipes
        }
        return recipes.filter((recipe => {
            const recipeName = recipe.name.toLowerCase()
            const recipeDesc = recipe.overview.toLowerCase()
            return recipeName.includes(query) || recipeDesc.includes(query)
        }))
    }
        
                 
    handleSearch = (query) => {
        // the input in search field is stored in local state
        this.setState({
               query: query
            })
      }

    
    render() {
        const {recipes} = this.props
        return (
            <div className="Recipes-List">
                <h1 className="recipes-list-title">Recipes</h1>
                {/* handleSearch is called on change when user types in somethign in search field */}
                <div><Search handleSearch={this.handleSearch} /></div>
                <div className="recipes-grid-container">
                    {recipes && this.filterRecipes(recipes, this.state.query).map(recipe => 
                        <div className="recipe-grid-item" key={recipe.id}>
                            <Link className="recipes-list-link" to={`/recipes-list/${recipe.id}`}>
                                <img className="grid-recipe-image" src={recipe.image_url} alt={recipe.name}></img>
                                <div className="recipe-grid-title-middle">
                                    <div className="recipe-grid-name">{recipe.name}</div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
           </div>
        )
    }
}
    
    
export default RecipesList

// const RecipesList = ({recipes}) => {
    
//     return (
        
//         <div className="Recipes-List-Container">
//             <h1 className="recipes-list-title">Recipes</h1>
//             <div><Search /></div>
//             <div className="recipes-grid-container">
//                 {recipes && recipes.map(recipe => 
//                     <div className="recipe-grid-item" key={recipe.id}>
//                         <Link className="recipes-list-link" to={`/recipes-list/${recipe.id}`}>
//                             <img className="grid-recipe-image" src={recipe.image_url} alt={recipe.name}></img>
//                             <div className="recipe-grid-title-middle">
//                                 <div className="recipe-grid-name">{recipe.name}</div>
//                             </div>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//        </div>
//     )
// }

// export default RecipesList