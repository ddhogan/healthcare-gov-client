import React from 'react';
import BlogPost from './BlogPost';

const BlogList = (props) => {

  const itemList = props.blogPosts.map(item => {
    return (
      <BlogPost title={item.title} url={item.url} lang={item.lang} excerpt={item.excerpt} />
    )
  });

  return (
    <div className="BlogList">
      {itemList}
    </div>
  );
}

export default BlogList;