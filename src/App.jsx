import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import fetch from 'isomorphic-fetch';
import logo from './logo@2x.png';
import './dropdown.css'
import './App.css';
import StatesContainer from './StatesContainer';
import TopicsContainer from './TopicsContainer';
import {fetchStates} from './contentActions';

const options = [ 'articles', 'blog', 'questions', 'glossary', 'states', 'topics' ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      data: undefined,
    };
    this._onSelect = this._onSelect.bind(this)
  }
  _onSelect(option) {
    console.log('You selected ', option.label)
    this.setState({selected: option.label})
  }

  onSetResult(result) {
    this.setState({data: result});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `this.state.data is now: `, this.state.data
    );
  }

  // fetchContent () {
  //   console.log(`Accessing https://www.healthcare.gov/api/${this.state.selected}.json ...`)
  //   fetch(`https://www.healthcare.gov/api/${this.state.selected}.json`)
  //     .then(response => response.json())
  //     .then(response => this.onSetResult({ response }))
  //     .then(function(response) {
  //       switch(this.state.selected){
  //         case 'states':
  //           return <StatesContainer states={response.states}/>;
  //         case 'topics':
  //           return <TopicsContainer />
  //         default:
  //           return null;
  //       }
  //     })
  // }

  render() {
        
    return (
      <div className="App">
        <img src={logo} alt="healthcare.gov logo"/>
        <header className="App-header">
          <h1>Content Browser</h1>
        </header>
        <Dropdown 
          options={options} 
          onChange={this._onSelect}
          placeholder="Select an option" 
          className="dropdown"
          value={this.state.selected}
        />
        <button type="submit" onClick={this.fetchContent}>Submit</button>
        
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchStates: () => dispatch(fetchStates()),
})

export default connect(null, mapDispatchToProps)(App);
