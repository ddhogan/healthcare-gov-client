import React from 'react';
import '../../css/card.css';

const GlossaryItem = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div className="card">
      <a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small>
      <p>{props.desc}</p>
    </div>
  );
}

export default GlossaryItem;