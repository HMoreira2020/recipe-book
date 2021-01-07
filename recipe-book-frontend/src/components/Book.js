import React from 'react'
import RecipesContainer from '../containers/RecipesContainer'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'
import { Link, withRouter } from 'react-router-dom'




// //must pass in props when it's a functional component
const Book = (props) => {
  const {match, books, history} = props
    //grab specific book by id props.match from current path - '/books/1'
    // //have access to props.match because I passed routerProps in to the Router
    let book = books.find(book => book.id === parseInt(match.params.id))

    if (!book) {
        return (
          <section>
            <h2>Book not found!</h2>
          </section>
        )
      }
    

    const handleDeleteBook = (bookId) => {
      props.deleteBook(bookId)
      history.push(`/books`);
  }

    return (
        <div className="Book">
            <h2>{book.title}</h2>
            <p className="book-controls">
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              <button><Link to={`/books/${book.id}/edit`} className="btn-edit">Edit</Link></button>
            </p>
            <RecipesContainer book={book} /> 

        </div>
    )
}

export default withRouter(connect(null, {deleteBook})(Book))