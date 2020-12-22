// render other components
// pass Data 
// other functions 
// compontent did mount 
//typically class components, typically need a state

import React from 'react'
import BooksInput from '../components/BooksInput'
import Books from '../components/Books'
import { connect } from 'react-redux'
import {fetchBooks} from '../actions/fetchBooks'

class BooksContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBooks()
    }

    render(){
        return (
            <div>
                Books Container 
                <BooksInput /> 
                <Books books={this.props.books}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, {fetchBooks})(BooksContainer)
