import React from 'react'
// import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Recipes = (props) => {
    //first time this runs or when refreshed the recipes are undefined because store and state have not been updated 
    //any time we refresh the BooksContainer will remount and in the componentDidMount the books are fetched and store updated
    return (
        <div className="Recipes">
           <h1>Table of Contents</h1>
           
           {props.recipes && props.recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
        </div>
    )
}

export default Recipes