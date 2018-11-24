import React from 'react';

const USState = (props) => {
  return (
    <div key={props.USState.id}>
      <li>{props.usState.title}</li>
    </div>
  )
}

export default USState;