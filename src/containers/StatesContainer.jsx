import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStates } from '../actions/contentActions';
import StatesList from '../components/StatesList';

class StatesContainer extends Component {
  componentDidMount = () => {
    this.props.fetchStates();
  }

  render() {
    return(
      <div className="statesContainer">
        <h2>States</h2>
        <StatesList states={this.props.states}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ states: state.content.states });

const mapDispatchToProps = dispatch => ({
  fetchStates: () => dispatch(fetchStates()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StatesContainer);