import React from 'react'
import RecipesContainer from '../containers/RecipesContainer'
import {connect} from 'react-redux'
import {deleteBook} from '../actions/deleteBook'
import { Link, withRouter } from 'react-router-dom'


const Book = (props) => {
  const {match, books, history} = props
    
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
            <h1 className="book-title">{book.title}</h1>
            <div className="book-description">{book.description}</div>
            
            <div className="book-controls">
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button> | 
              <Link to={`/books/${book.id}/edit`} className="btn-edit">Edit</Link> | 
              <Link to={`/books/${book.id}/recipes/new`}>Add Recipe</Link>
            </div>
            
            {(book.recipes.length !== 0) ? <RecipesContainer book={book} /> : null}
        </div>
    )
}

export default withRouter(connect(null, {deleteBook})(Book))