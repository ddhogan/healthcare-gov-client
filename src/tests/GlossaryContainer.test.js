import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GlossaryContainer } from '../containers/GlossaryContainer';
import GlossaryList from '../components/glossary/GlossaryList';
import GlossaryItem from '../components/glossary/GlossaryItem';

configure ({adapter: new Adapter()});

describe('<GlossaryContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GlossaryContainer fetchGlossary={() => {}}/>);
    wrapper.setProps({glossary: { title: 'deductable', url: 'http://healthcare.gov/things' }});
  })

  it('should render a <GlossaryList /> when receiving the glossary items', () => {
    expect(wrapper.find(GlossaryList));
  });

  it('should render a <Glossary /> when receiving the item', () => {
    expect(wrapper.find(GlossaryItem));
  });

});