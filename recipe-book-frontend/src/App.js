// import { logo } from './logo'
import React from 'react'
import './App.css';

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       App 
      </header>
    </div>
  );
}
}

export default App;
