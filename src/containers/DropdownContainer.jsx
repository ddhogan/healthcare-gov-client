import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown'
import '../css/dropdown.css'

const options = [ 'states', 'topics', 'articles', 'blog', 'questions', 'glossary', ];

class DropdownContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
    this._onSelect = this._onSelect.bind(this)
  }
  _onSelect(option) {
    this.setState({selected: option.label})
    console.log('You selected ', option.label)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     `this.state.selected is now: `, this.state.selected
  //   );
  // }

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

        <button type="submit" onClick={() => this.props.history.push(`/${this.state.selected}`)}>Submit</button>

      </div>
    )
  }
};

export default withRouter(DropdownContainer);