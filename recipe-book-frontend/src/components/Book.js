import React from 'react'

// //must pass in props when it's a functional component
const Book = (props) => {
    
    return (
        <div className="Book">
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
        </div>
    )
}

export default Book