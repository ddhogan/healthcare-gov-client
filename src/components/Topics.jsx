import React from 'react';
import Topic from './Topic';

const Topics = (props) => {
  
  // console.log(props.topics.topics);

  // const topicsArray = Array.from(props.topics);
  // console.log(topicsArray);
  
  // const topicsList = topicsArray.map(topic => {
  const topicsList = props.topics.map(topic => {
    return (
      <div key={topic.id}>
        { <Topic topic={topic} /> }
      </div>
    )
  });

  return (
    <div className="topicsList">
        {topicsList}
    </div>
  );
}

export default Topics;