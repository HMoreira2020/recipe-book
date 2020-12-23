import React from 'react'

// //must pass in props when it's a functional component
const Book = (props) => {
    
    let book = props.books.find(book => book.id === parseInt(props.match.params.id))
    
    return (
        <div className="Book">
            {book ? book.title : "loading..."}
        </div>
    )
}

export default Book