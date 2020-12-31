import React from 'react'
// import { Redirect } from 'reac-router-dom'


// //must pass in props when it's a functional component
const Recipe = (props) => {
   
    console.log(props)
    //grab specific book by id props.match from current path - '/books/1'
    //have access to props.match because I passed routerProps in to the Router
    let recipe = props.recipes.find(recipe => recipe.id === parseInt(props.match.params.id))
    
    return (
        <div className="Recipe">
            <h2>{recipe ? recipe.name : "Nothing to see here..."}</h2>
        </div>
    )
}

export default Recipe


