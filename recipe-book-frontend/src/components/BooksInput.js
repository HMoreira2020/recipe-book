// form for create a new books 
import React from 'react'
import { connect } from 'react-redux'
//imports must be in curly braces if you don't "export default"
import { addBook } from '../actions/addBook'


class BooksInput extends React.Component {
    state = {
        title: "",
        description: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
     }


    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addBook(this.state)
        this.setState({
            title: "",
            description: ""
        })
    }
    

    render(){
        return(
            <div className="Books-Input">
                <h2>Create a Recipe Book!</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe Book Title</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={this.state.title}>
                    </input><br/>
                    <label>Description</label><br/>
                    <input 
                        onChange={this.handleChange} 
                        type="text"  
                        name="description" 
                        placeholder="Description" 
                        value={this.state.description}>
                    </input><br/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         books: state.books 
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addBook: (book) => dispatch(addBook(book))
//     }
// }


export default connect(null, {addBook})(BooksInput)