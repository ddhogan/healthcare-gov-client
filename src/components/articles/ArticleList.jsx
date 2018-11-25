import React from 'react';
import Article from './Article';

const ArticleList = (props) => {

  const itemList = props.articles.map(item => {
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