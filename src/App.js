import React, { Component } from 'react';
import './App.css';
import TripleInputBox from './components/tripleinput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
           <a className="navbar-brand" href="#">Practice Irregular Verbs</a>
        </nav>
        <div>
        <TripleInputBox/>
        </div>
      </div>
    );
  }
}

export default App;
