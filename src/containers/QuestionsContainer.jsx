import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/contentActions';
import QuestionList from '../components/questions/QuestionList';

class QuestionsContainer extends Component {
  componentDidMount = () => {
    this.props.fetchQuestions();
  }

  render() {
    return(
      <div className="QuestionsContainer">
        <h2>Questions</h2>
        <QuestionList questions={this.props.questions}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ questions: state.content.questions });

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);