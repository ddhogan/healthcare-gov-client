import React from 'react';
import GlossaryItem from './GlossaryItem';

const GlossaryList = (props) => {
  
  const sortedItems = props.glossaryItems.sort(function(item1, item2) {
    if (item1.title > item2.title) {
      return 1;
    }
    if (item1.title < item2.title) {
      return -1;
    }
    return 0;
  });

  const itemList = sortedItems.map(item => {
    return (
      <GlossaryItem title={item.title} url={item.url} lang={item.lang} desc={item["meta-description"]} />
    )
  });

  return (
    <div className="glossaryItemList">
      {itemList}
    </div>
  );
}

export default GlossaryList;