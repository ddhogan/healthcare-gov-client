import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import '../css/dropdown.css'

const options = [ 'articles', 'blog', 'questions', 'glossary', 'states', 'topics' ];

class DropdownContainer extends Component {
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

  render() {
    return (
      <div id="dropdown">
        <Dropdown 
          options={options} 
          onChange={this._onSelect}
          placeholder="Select an option" 
          className="dropdown"
          value={this.state.selected}
        />

        <button type="submit" onClick={() => this.props.history.push('/states')}>Submit</button>

      </div>
    )
  }
};

export default DropdownContainer;