import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { QuestionsContainer } from '../containers/QuestionsContainer';
import QuestionList from '../components/questions/QuestionList';
import Question from '../components/questions/Question';

configure ({adapter: new Adapter()});

describe('<QuestionsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuestionsContainer fetchQuestions={() => {}}/>);
    wrapper.setProps({questions: { title: 'How to antibiotics work?', url: 'http://healthcare.gov/medicine' }});
  })

  it('should render a <QuestionList /> when receiving the glossary items', () => {
    expect(wrapper.find(QuestionList));
  });

  it('should render a <Question /> when receiving the item', () => {
    expect(wrapper.find(Question));
  });

});