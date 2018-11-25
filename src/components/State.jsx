import React from 'react';

const State = (props) => {
  // console.log(props)
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url} target="_blank" rel="noopener noreferrer"> {props.title} </a> {props.lang}</li><br></br>
    </div>
  );
}

export default State;