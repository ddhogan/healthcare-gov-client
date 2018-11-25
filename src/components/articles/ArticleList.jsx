import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  
  // const sortedItems = props.articles.sort(function(item1, item2) {
  //   if (item1.title > item2.title) {
  //     return 1;
  //   }
  //   if (item1.title < item2.title) {
  //     return -1;
  //   }
  //   return 0;
  // });

  const itemList = props.articles.map(item => {
  // const itemList = sortedItems.map(item => {
    return (
      <div>
        <Article title={item.title} url={item.url} lang={item.lang}/>
      </div>
    )
  });

  return (
    <ul className="ArticleList">
        {itemList}
    </ul>
  );
}

export default ArticleList;