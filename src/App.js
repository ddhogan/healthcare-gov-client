import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import logo from './logo@2x.png';
import './dropdown.css'
import './App.css';

const options = [ 'objects', 'collections', 'index' ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
    this._onSelect = this._onSelect.bind(this)
  }
  _onSelect(option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  fetchContent = () => {
    return fetch('')
  }
  
  render() {
        
    return (
      <div className="App">
        <img src={logo} alt="healthcare.gov logo"/>
        <header className="App-header">
          <h1>Content Glossary</h1>
        </header>
        <Dropdown 
          options={options} 
          onChange={this._onSelect}
          placeholder="Select an option" 
          className="dropdown"
          value={this.state.selected}
        />
        <ul id="content"></ul>
      </div>
    );
  }
}

export default App;
