import React from 'react';
import Topic from './Topic';

const Topics = (props) => {
  
  // console.log(props.topics.topics);

  // const topicsArray = Array.from(props.topics);
  // console.log(topicsArray);
  
  // const topicsList = topicsArray.map(topic => {
  const topicsList = props.topics.map(topic => {
    return (
      <div>
        <Topic title={topic.title} url={topic.url} />
      </div>
    )
  });

  return (
    <ul className="topicsList">
        {topicsList}
    </ul>
  );
}

export default Topics;