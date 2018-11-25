import React from 'react';
import BlogPost from './BlogPost';

const BlogList = (props) => {
  
  // const sortedItems = props.articles.sort(function(item1, item2) {
  //   if (item1.title > item2.title) {
  //     return 1;
  //   }
  //   if (item1.title < item2.title) {
  //     return -1;
  //   }
  //   return 0;
  // });

  const itemList = props.blogPosts.map(item => {
  // const itemList = sortedItems.map(item => {
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