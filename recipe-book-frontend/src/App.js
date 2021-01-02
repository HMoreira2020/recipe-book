import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from './actions/fetchBooks'
// import BooksContainer from './containers/BooksContainer'
// import HomePage from './components/Homepage'
// import { Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './App.css'


class App extends React.Component {

  
  render() {
    return (
      <div className="App"> 
      <Navbar /> 
          {/* <Link to="/home">Home</Link>
          <Link to="/books">Books</Link> */}
        <div>
          {/* <Route path='/home' component={HomePage} />
          <Route path='/books' component={BooksContainer} /> */}
        </div>

      </div>
    )
  }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBooks: (action) => dispatch(fetchBooks(action))
//   }
// }

export default connect(null, {fetchBooks})(App);
