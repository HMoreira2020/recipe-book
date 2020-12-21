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


export default connect(null, {fetchBooks})(App);
