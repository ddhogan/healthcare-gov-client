import React from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import StatesContainer from './containers/StatesContainer';
import DropdownContainer from './containers/DropdownContainer';
import TopicsContainer from './containers/TopicsContainer';
import GlossaryContainer from './containers/GlossaryContainer';
// import Link from 'react-router-dom/Link';

const App = () => {

  return (
    <div className="App">
      <Header />
      <DropdownContainer />
      <div className="results">
        <Route exact path="/topics" component={TopicsContainer} />
        <Route exact path="/states" component={StatesContainer} />
        <Route exact path="/glossary" component={GlossaryContainer} />
      </div>
    </div>
  );
}

export default App;
