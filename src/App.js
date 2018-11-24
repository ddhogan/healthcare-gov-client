import React from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import StatesContainer from './containers/StatesContainer';
import DropdownContainer from './containers/DropdownContainer';
import TopicsContainer from './containers/TopicsContainer';
import {fetchStates} from './actions/contentActions';
// import Link from 'react-router-dom/Link';

const App = () => {

  return (
    <div className="App">
      <Header />
      <DropdownContainer />
      <div className="results">
        <Route exact path="/topics" component={TopicsContainer} />
      </div>
    </div>
  );
}

export default App;
