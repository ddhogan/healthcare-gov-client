import React from 'react';

const State = (props) => {
  // console.log(props)
  return (
    <div>
      <li><a href={props.url}> {props.title} </a></li><br></br>
    </div>
  );
}

export default State;