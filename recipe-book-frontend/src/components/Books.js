import React from 'react'
import { Link } from 'react-router-dom'

//must pass in props when it's a functional component
const Books = (props) => {

    return (
        <div className="books">
           <h1 className="book-title">Recipe Books</h1>
           <div className="books-grid-container">
            
            {props.books.map(book => 
            <div className="book-grid-item" key={book.id}>
                <div className="card u-clearfix">
                <h2 className="book-title">{book.title}</h2>
                <span className="book-description">{book.description}</span>
                    <Link to={`/books/${book.id}`}>Read</Link>
                </div>
            </div>)}
        </div>
        </div>
    )
}

export default Books