import React from 'react'
import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Books = (props) => {

    return (
        <div className="Books">
           <h1>Recipe Books</h1>
            {props.books.map(book => 
            <div key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </div>)}
        </div>
    )
}

export default Books