import React from 'react';
import Question from './Question';

const QuestionList = (props) => {

  const itemList = props.questions.map(item => {
    return (
      <div>
        <Question title={item.title} url={item.url} lang={item.lang}/>
      </div>
    )
  });

  return (
    (itemList.length === 0) ? <p>There are no Questions to display.</p> : <ul className="QuestionList">{itemList}</ul>
  );
}

export default QuestionList;