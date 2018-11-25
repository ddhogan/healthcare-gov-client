import React from 'react';

const BlogPost = (props) => {
  const baseUrl = "https://www.healthcare.gov";
  return (
    <div>
      <li><a href={baseUrl + props.url}> {props.title} </a> <small>({props.lang})</small></li>
      <div dangerouslySetInnerHTML={ {__html: props.excerpt} } />
      <br></br>
    </div>
  );
}

export default BlogPost;