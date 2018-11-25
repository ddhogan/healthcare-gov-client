import React from 'react';

const Article = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url} target="_blank" rel="noopener noreferrer"> {props.title} </a> <small>({props.lang})</small></li><br></br>
    </div>
  );
}

export default Article;