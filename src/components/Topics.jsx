import React from 'react';
import Topic from './Topic';

const Topics = (props) => {
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