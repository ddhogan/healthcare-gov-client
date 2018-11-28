import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ArticlesContainer } from '../containers/ArticlesContainer';
import ArticleList from '../components/articles/ArticleList';
import Article from '../components/articles/Article';

configure ({adapter: new Adapter()});

describe('<ArticlesContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticlesContainer fetchArticles={() => {}}/>);
    wrapper.setProps({questions: { articles: 'An interview with a Doctor', url: 'http://healthcare.gov/weeklypubs' }});
  })

  it('should render a <ArticleList /> when receiving the articles', () => {
    expect(wrapper.find(ArticleList));
  });

  it('should render a <Article /> when receiving the item', () => {
    expect(wrapper.find(Article));
  });

});