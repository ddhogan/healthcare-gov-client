import React from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import StatesContainer from './containers/StatesContainer';
import DropdownContainer from './containers/DropdownContainer';
import TopicsContainer from './containers/TopicsContainer';
import GlossaryContainer from './containers/GlossaryContainer';
import ArticlesContainer from './containers/ArticlesContainer';
import BlogContainer from './containers/BlogContainer';
import QuestionsContainer from './containers/QuestionsContainer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <DropdownContainer />
      <div className="results">
        <Route exact path="/topics" component={TopicsContainer} />
        <Route exact path="/states" component={StatesContainer} />
        <Route exact path="/glossary" component={GlossaryContainer} />
        <Route exact path="/articles" component={ArticlesContainer} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route exact path="/questions" component={QuestionsContainer} />
      </div>
    </div>
  );
}

export default App;
