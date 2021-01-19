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
        const {books} = this.props
        return (
            <div className="Books-Container"> 
                <Switch>
                    <Route path='/books/new' component={BooksInput} />
                    <Route path='/books/:id/edit' render={(routerProps)=> <BooksInput {...routerProps} books={books} editMode={true} />}  /> 
                    <Route path='/books/:id' render={(routerProps)=> <Book {...routerProps} books={books}/>} />
                    <Route path='/books' render={(routerProps)=> <Books {...routerProps} books={books}/>} />
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
