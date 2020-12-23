// render other components
// pass Data 
// other functions 
// compontent did mount 
//typically class components, typically need a state

import React from 'react'
import BooksInput from '../components/BooksInput'
import Books from '../components/Books'
import Book from '../components/Book'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchBooks} from '../actions/fetchBooks'

class BooksContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBooks()
    }

    render(){
        return (
            <div> 
                <Switch>
                {/* //switch returns first path that matches - solves id/new problem */}
                    <Route path='/books/new' component={BooksInput} />
                    <Route path='/books/:id' render={(routerProps)=> <Book {...routerProps} books={this.props.books}/>} />
                    <Route path='/books' render={(routerProps)=> <Books {...routerProps} books={this.props.books}/>} />
                </Switch>
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
