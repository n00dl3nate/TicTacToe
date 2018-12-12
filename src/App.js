import React, { Component } from 'react';
import BoxContainer from "./Containers/BoxContainer.js"
import './App.css';

class App extends Component {
  render() {
    return(
      <>
      <h1>Tic Tac Toe</h1>
    <BoxContainer/>
    </>
  )};
}

export default App;
