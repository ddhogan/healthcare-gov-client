import React from 'react';
import '../../css/card.css';

const BlogPost = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div className="card">
      <a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small>
      <div dangerouslySetInnerHTML={ {__html: props.excerpt} } />
    </div>
  );
}

export default BlogPost;