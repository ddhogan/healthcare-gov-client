import React from 'react';

const Topic = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url} target="_blank" rel="noopener noreferrer"> {props.title} </a></li><br></br>
    </div>
  );
}

export default Topic;