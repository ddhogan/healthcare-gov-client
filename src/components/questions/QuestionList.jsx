import React from 'react';
import Question from './Question';

const QuestionList = (props) => {

  const itemList = props.questions.map(item => {
    return (
      <Question title={item.title} url={item.url} lang={item.lang}/>
    )
  });

  return (
    (itemList.length === 0) ? <p>There are no Questions to display.</p> : <div className="QuestionList">{itemList}</div>
  );
}

export default QuestionList;