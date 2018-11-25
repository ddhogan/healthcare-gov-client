import React from 'react';
import Article from './Article';

const ArticleList = (props) => {

  const itemList = props.articles.map(item => {
    return (
      <Article title={item.title} url={item.url} lang={item.lang} bite={item.bite}/>
    )
  });

  return (
    <div className="ArticleList">
      {itemList}
    </div>
  );
}

export default ArticleList;