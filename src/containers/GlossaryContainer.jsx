import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGlossary } from '../actions/contentActions';
import GlossaryList from '../components/glossary/GlossaryList';

export class GlossaryContainer extends Component {
  componentDidMount = () => {
    this.props.fetchGlossary();
  }

  render() {
    return(
      <div className="GlossaryContainer">
        <h2>Glossary Items</h2>
        <GlossaryList glossaryItems={this.props.glossary}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ glossary: state.content.glossary });

const mapDispatchToProps = dispatch => ({
  fetchGlossary: () => dispatch(fetchGlossary()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlossaryContainer);