import React from 'react'
import Book from './Book'
// import {Route} from 'react-router-dom'

//must pass in props when it's a functional component
const Books = (props) => {

    return (
        <div className="Books">
           <h1>Recipe Books</h1>
            {props.books.map(book => 
            <div key={book.id}><Book book={book} /></div>)}
        </div>
    )
}

export default Books