import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BlogContainer } from '../containers/BlogContainer';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';

configure ({adapter: new Adapter()});

describe('<BlogContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BlogContainer fetchBlog={() => {}}/>);
    wrapper.setProps({questions: { title: 'New features to speed application process', url: 'http://healthcare.gov/blog' }});
  })

  it('should render a <BlogList /> when receiving the glossary items', () => {
    expect(wrapper.find(BlogList));
  });

  it('should render a <BlogPost /> when receiving the item', () => {
    expect(wrapper.find(BlogPost));
  });

});