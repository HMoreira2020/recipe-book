import React from 'react'
import { Link } from 'react-router-dom'


//must pass in props when it's a functional component
const Recipes = (props) => {
    console.log("Recipes component props:", props)
    //rendering a books recipes
    //first time this runs or when refreshed the recipes are undefined because store and state have not been updated 
    //any time we refresh the BooksContainer will remount and in the componentDidMount the books are fetched and store updated
    return (
        
        <div class="recipes">
           <h3 className="table-of-contents">Table of Contents</h3>
           
           {/* iterate through the books recipes and display a link to the recipe */}
           <div class="recipes-links">
            {props.recipes && props.recipes.map((recipe, index) => 
                <div className="recipe-card-container" key={recipe.id}>
                            <span className="card-number card-circle subtle">{index + 1}</span>
                            
                            <Link to={`/books/${props.book.id}/recipes/${recipe.id}`}>
                                <h2 className="recipe-card-title">{recipe.name}</h2>
                            </Link>
                        </div>
            )}
            </div>

        </div>
    )
}

export default Recipes


{/* <div class="recipes-links">
{props.recipes && props.recipes.map((recipe, index) => 
    <div className="recipe-card-container" key={recipe.id}>
        <div className="card u-clearfix">
            <div class="card-body">
                <span class="card-number card-circle subtle">{index + 1}</span>
                <span class="card-book-title subtle"></span>
                <h2 className="recipe-card-title">{recipe.name}</h2>
                <span className="card-description">{recipe.overview}</span>
                <div class="card-read"><Link to={`/books/${props.book.id}/recipes/${recipe.id}`}>Read</Link></div>
            </div>
        </div>
        <div class="card-shadow"></div>
    </div>
)}
</div> */}