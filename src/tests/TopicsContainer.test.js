import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TopicsContainer } from '../containers/TopicsContainer';
import TopicsList from '../components/topics/TopicsList';
import Topic from '../components/topics/Topic';

configure ({adapter: new Adapter()});

describe('<TopicsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopicsContainer fetchTopics={() => {}}/>);
    wrapper.setProps({topics: { title: 'How to contact us for help', url: 'http://healthcare.gov/help' }});
  })

  it('should render a <TopicsList /> when receiving the topics', () => {
    expect(wrapper.find(TopicsList));
    // expect(wrapper.find(Topic));
  });

  it('should render a <Topic /> when receiving the topic', () => {
    expect(wrapper.find(Topic));
  });

});