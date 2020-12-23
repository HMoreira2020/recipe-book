import React from 'react'
// import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Recipes = (props) => {
    console.log(props)
    return (
        <div className="Recipes">
           <h1>{props.book ? `${props.book.title} Recipes` : null }</h1>
            {/* {props.book.recipes.map(recipe => 
            <div key={recipe.id}>{recipe.name}
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </div>)} */}
        </div>
    )
}

export default Recipes