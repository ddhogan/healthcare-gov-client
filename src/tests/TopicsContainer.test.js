import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TopicsContainer } from '../containers/TopicsContainer';
import TopicsList from '../components/topics/TopicsList';

configure ({adapter: new Adapter()});

describe('<TopicsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopicsContainer fetchTopics={() => {}}/>);
  })

  it('should render a <TopicsList /> when receiving the topics', () => {
    wrapper.setProps({topics: { title: 'How to contact us for help', url: 'http://healthcare.gov/help' }});
    expect(wrapper.find(TopicsList));
  });

});