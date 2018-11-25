import React from 'react';

const Article = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small></li>
      <p>{props.bite}</p><br></br>
    </div>
  );
}

export default Article;