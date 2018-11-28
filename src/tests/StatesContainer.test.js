import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StatesContainer } from '../containers/StatesContainer';
import StatesList from '../components/states/StatesList';
import State from '../components/states/State';

configure ({adapter: new Adapter()});

describe('<StatesContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatesContainer fetchStates={() => {}}/>);
    wrapper.setProps({states: { title: 'New Hampshire', url: 'http://healthcare.gov/NH' }});
  })

  it('should render a <StatesList /> when receiving the glossary items', () => {
    expect(wrapper.find(StatesList));
  });

  it('should render a <State /> when receiving the item', () => {
    expect(wrapper.find(State));
  });

});