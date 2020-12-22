import React from 'react'

// //must pass in props when it's a functional component
const Book = (props) => {
    
    return (
        <div className="Book">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* {props.recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)} */}
            {/* only want recipes displayed if they click on a recipe book */}
        </div>
    )
}

export default Book