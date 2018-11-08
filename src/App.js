import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import logo from './logo@2x.png';
import 'react-dropdown/style.css'
import './App.css';

class App extends Component {
  render() {
    const options = [ 'one', 'two', 'three' ]
    const defaultOption = options[0]
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="healthcare.gov logo"/>
        </header>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
      </div>
    );
  }
}

export default App;
