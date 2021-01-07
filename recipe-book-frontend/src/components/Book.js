import React from 'react'
import RecipesContainer from '../containers/RecipesContainer'



// //must pass in props when it's a functional component
const Book = (props) => {

    //grab specific book by id props.match from current path - '/books/1'
    // //have access to props.match because I passed routerProps in to the Router
    let book = props.books.find(book => book.id === parseInt(props.match.params.id))

    if (!book) {
        return (
          <section>
            <h2>Book not found!</h2>
          </section>
        )
      }
    
    return (
        <div className="Book">
            <h2>{book.title}</h2>
            <RecipesContainer book={book} /> 

        </div>
    )
}

export default Book