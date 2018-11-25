import React, { Component } from 'react';
// import USState from '../components/USState';

class StatesContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    // const statesList = this.props.states.map(usState => {
    //   return {
    //     title: usState.title,
    //     url: usState.url,
    //     excerpt: usState.excerpt,
    //   }
    // });
  
    return(
      <div>
        <h2>States</h2>
        <p>These are all the glossary items</p>
      </div>
    );
  }
}

export default StatesContainer;