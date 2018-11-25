import React from 'react';

const Topic = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}

export default Topic;