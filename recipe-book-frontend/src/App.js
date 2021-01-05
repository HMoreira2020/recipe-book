import React from 'react'
import BooksContainer from './containers/BooksContainer'
import RecipesList from './components/RecipesList'
import HomePage from './components/Homepage'
import { Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './App.css'


class App extends React.Component {

  
  render() {
    return (
      <div className="App"> 
      <Navbar /> 
        <div>
          <Route path='/home' component={HomePage} />
          <Route path='/books' component={BooksContainer} />
          <Route exact path='/recipes' component={RecipesList} />
        </div>

      </div>
    )
  }

}

export default App;
