import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

//must pass in props when it's a functional component
const Books = ({books}) => {

    return (
        <div className="books">
           <h1 className="book-title">Recipe Books</h1>
           <div className="books-grid-container">
            {books && books.map(book => 
                <div className="book-grid-item" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <div className="card u-clearfix">
                        <h2 className="book-title">{book.title}</h2>
                        <span className="book-description">{book.description}</span>
                        </div>
                    </Link>
                    <LikeButton /> 
                </div>
            )}
        </div>
        </div>
    )
}

export default Books