import React from 'react'
// import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Recipes = (props) => {
    
    return (
        <div className="Recipes">
           <h1>Table of Contents</h1>
           {props.recipes && props.recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
        </div>
    )
}

export default Recipes