import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Detail from './component/detail';

class App extends Component {
  fungsiNama(){
    console.log()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Facebook</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <Detail nama="fajar" />
        </p>
      </div>
    );
  }
}

export default App;
