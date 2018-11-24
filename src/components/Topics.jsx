import React from 'react';

const Topics = (props) => {
  return (
    <div key={props.topics.id}>
      <li>{props.topics.title}</li>
    </div>
  )
}

export default Topics;