import React from 'react';

const Topic = (props) => {
  // console.log(props)
  return (
    <div>
      <li>Topic: <a href={props.url}> {props.title} </a></li>
    </div>
  );
}

export default Topic;