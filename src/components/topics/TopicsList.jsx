import React from 'react';
import Topic from './Topic';

const TopicsList = (props) => {
  const topicsList = props.topics.map(topic => {
    return (
      <Topic title={topic.title} url={topic.url} lang={topic.lang} desc={topic["meta-description"]} />
    )
  });

  return (
    <div className="topicsList">
      {topicsList}
    </div>
  );
}

export default TopicsList;