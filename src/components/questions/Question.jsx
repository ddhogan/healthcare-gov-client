import React from 'react';

const Question = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small></li><br></br>
    </div>
  );
}

export default Question;