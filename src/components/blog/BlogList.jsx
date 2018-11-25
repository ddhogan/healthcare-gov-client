import React from 'react';
import BlogPost from './BlogPost';

const BlogList = (props) => {

  const itemList = props.blogPosts.map(item => {
    return (
      <div>
        <BlogPost title={item.title} url={item.url} lang={item.lang} excerpt={item.excerpt} />
      </div>
    )
  });

  return (
    <ul className="BlogList">
        {itemList}
    </ul>
  );
}

export default BlogList;