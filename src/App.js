import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import logo from './logo@2x.png';
import './dropdown.css'
import './App.css';

class App extends Component {
  render() {
    const options = [ 'objects', 'collections', 'index' ]
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="healthcare.gov logo"/>
        </header>
        <Dropdown options={options} onChange={this._onSelect} placeholder="Select an option" className="dropdown"/>
      </div>
    );
  }
}

export default App;
