// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { addBook } from '../actions/addBook'
import { withRouter } from 'react-router-dom'
import { editBook } from '../actions/editBook'
import PropTypes from 'prop-types';



class BooksInput extends React.Component {
   


    handleOnSubmit = event => {
        event.preventDefault();
        const bookId = parseInt(event.target.id)
        const {editMode} = this.props;
        const title = this.titleRef.value
        const description = this.descriptionRef.value
        if (editMode) {
            const bookData = {
                title,
                description
            }
            this.props.editBook(bookData, bookId)
        } else {
            const newBook = {
                title, 
                description,
                editing: false
            }
            this.props.addBook(newBook)
        }
        this.props.history.push('/books')
    }
    

    render(){
        const {editMode} = this.props
        const book = editMode ? this.props.books.find(book => book.id === parseInt(this.props.match.params.id)) : this.props.book
        const pageTitle = editMode ? 'Edit Your Recipe Book' : 'Create Your Recipe Book';
        const buttonTitle = editMode ? 'Update' : 'Add';
        return(
            <div className="Books-Input">
                <form id={book.id} onSubmit={this.handleOnSubmit}>
                    <h4 className="input-title">{pageTitle}</h4>
                    <label>Title</label><br/>
                    <input 
                        required
                        ref={input => this.titleRef = input} 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        defaultValue={book.title}>
                    </input><br/>
                    <label>Description</label><br/>
                    <input 
                        required
                        ref={input => this.descriptionRef = input} 
                        type="text"  
                        name="description" 
                        placeholder="Description" 
                        defaultValue={book.description}>
                    </input><br/>
                    <button type="submit">{buttonTitle}</button>
                </form>
               
            </div>
        )
    }
}

BooksInput.propTypes = {
    editMode: PropTypes.bool,
    book: PropTypes.object
}

BooksInput.defaultProps = {
    editMode: false,    // false: Create mode, true: Edit mode
    book: {
        id: "",
        title: "",
        description: ""
    }    // Pass defined Post object in create mode in order not to get undefined objects in 'defaultValue's of inputs.
}

export default withRouter(connect(null, {addBook, editBook})(BooksInput))