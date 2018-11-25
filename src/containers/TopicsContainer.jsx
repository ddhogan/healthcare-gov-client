import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/contentActions';
import Topics from '../components/Topics';

class TopicsContainer extends Component {
  componentDidMount = () => {
    this.props.fetchTopics();
  }

  render() {
    return(
      <div className="topicsContainer">
        <h2>Topics</h2>
        <Topics topics={this.props.topics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ topics: state.content.topics });

const mapDispatchToProps = dispatch => ({
  fetchTopics: () => dispatch(fetchTopics()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);