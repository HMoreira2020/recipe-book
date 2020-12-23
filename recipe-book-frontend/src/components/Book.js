import React from 'react'
// import { Redirect } from 'reac-router-dom'

// //must pass in props when it's a functional component
const Book = (props) => {
    //grab specific book by id props.match from current path - '/books/1'
    //have access to props.match because I passed routerProps in to the Router
    let book = props.books.find(book => book.id === parseInt(props.match.params.id))
    
    return (
        <div className="Book">
            {book ? book.title : "Nothing to see here..."}
        </div>
    )
}

export default Book