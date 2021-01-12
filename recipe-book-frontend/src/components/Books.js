import React from 'react'
import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Books = (props) => {

    return (
        <div className="books">
           <h1 className="book-title">Recipe Books</h1>
            {props.books.map(book => 
            <div key={book.id}>
                <h2 className=""><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
            </div>)}
        </div>
    )
}

export default Books