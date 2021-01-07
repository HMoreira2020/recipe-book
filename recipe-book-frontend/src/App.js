import React from 'react'
import BooksContainer from './containers/BooksContainer'
import RecipesListContainer from './containers/RecipesListContainer'
import HomePage from './components/Homepage'
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './App.css'




class App extends React.Component {

  
  render() {
    return (
      <div className="App"> 
      <Navbar /> 
        <div>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={HomePage} />
            <Route path='/books' component={BooksContainer} />
            <Route path='/recipes-list' component={RecipesListContainer} />
            

          </Switch>
        </div>

      </div>
    )
  }

}

export default App;
