import React from 'react'
import Book from './Book'

//must pass in props when it's a functional component
const Books = (props) => {

    return (
        <div className="Books">
           <h1>Recipe Books</h1>
            {props.books.map(book => <Book key={book.id} title={book.title} description={book.description} />)}
            {/* {props.books.map(book => <li key={book.id}>{book.title}</li>)} */}
        </div>
    )
}

export default Books