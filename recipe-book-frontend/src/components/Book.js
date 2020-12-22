import React from 'react'

// //must pass in props when it's a functional component
const Book = (props) => {
    
    return (
        <div className="Book">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Book