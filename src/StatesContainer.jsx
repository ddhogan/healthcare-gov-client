import React, { Component } from 'react';

class StatesContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const statesList = this.props.states.map(state => {
      return (
        <div key={state.id}>
          <h2>{state.title}</h2>
          <a href={state.url}>{state.url}</a>
          <p>{state.excerpt}</p>
        </div>
      )
    });
  
    return(
      <div>{statesList}</div>
    );
  }
}

export default StatesContainer;