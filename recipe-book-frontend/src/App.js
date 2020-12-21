import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from './actions/fetchBooks'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchBooks({type: "FETCH_BOOKS"})
  }
  
  render() {
    return (
    <div className="App"> 
       App 
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
