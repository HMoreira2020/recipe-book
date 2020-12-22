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
    //controlled form means values held in state 

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
     }


    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addBook(this.state)
        //onsubmit sends state/new book to addBook action creator
        this.setState({
            title: "",
            description: ""
        })
    }
    

    render(){
        return(
            <div className="Books-Input">
                <h4>Create a Recipe Book!</h4>
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