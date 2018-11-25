import React from 'react';
import '../../css/card.css';

const Article = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div className="card">
      <li><a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small></li>
      <p>{props.bite}</p>
    </div>
  );
}

export default Article;