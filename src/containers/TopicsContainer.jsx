import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/contentActions';
import TopicsList from '../components/topics/TopicsList';

export class TopicsContainer extends Component {  // added named export here to import it in the test
  componentDidMount = () => {
    this.props.fetchTopics();
  }

  render() {
    return(
      <div className="topicsContainer">
        <h2>Topics</h2>
        <TopicsList topics={this.props.topics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ topics: state.content.topics });

const mapDispatchToProps = dispatch => ({
  fetchTopics: () => dispatch(fetchTopics()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);