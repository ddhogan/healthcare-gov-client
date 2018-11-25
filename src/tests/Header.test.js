import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';
import logo from '../logo@2x.png';


configure({ adapter: new Adapter()}); // Enzyme is now connected

describe('<Header />', () => {
  it('should render the heading/title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(<h1>Content Browser</h1>));
  });

  it('should render the logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(<img src={logo}/>));
  });
});