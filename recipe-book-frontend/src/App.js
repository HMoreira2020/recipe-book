import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from './actions/fetchBooks'
import BooksContainer from './containers/BooksContainer'

class App extends React.Component {

  // componentDidMount(){
  //   this.props.fetchBooks({type: "FETCH_BOOKS"})
  // }
  
  render() {
    return (
    <div className="App"> 
      <div className="Books-Container">
        <BooksContainer />
      </div>
    </div>
  );
  }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBooks: (action) => dispatch(fetchBooks(action))
//   }
// }

export default connect(null, {fetchBooks})(App);
