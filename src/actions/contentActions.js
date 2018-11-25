import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

export function fetchStates () {
  console.log(`Accessing https://www.healthcare.gov/api/states.json ...`);
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_STATES });
    fetch(`https://www.healthcare.gov/api/states.json`)
    .then(response => response.json())
    .then(states => dispatch({ type:actionTypes.FETCH_STATES, payload: states.states }));
  }
}

export function fetchTopics () {
  console.log(`Accessing https://www.healthcare.gov/api/topics.json ...`);
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_TOPICS });
    return fetch(`https://www.healthcare.gov/api/topics.json`)
    .then(response => response.json())
    .then(topics => dispatch({ type: actionTypes.FETCH_TOPICS, payload: topics.topics }));
  };
};

export function fetchGlossary () {
  console.log(`Accessing https://www.healthcare.gov/api/glossary.json ...`);
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_GLOSSARY });
    return fetch(`https://www.healthcare.gov/api/topics.json`)
    .then(response => response.json())
    .then(glossary => dispatch({ type: actionTypes.FETCH_GLOSSARY, payload: glossary.topics }));
  };
};

export function fetchArticles () {
  console.log(`Accessing https://www.healthcare.gov/api/articles.json ...`);
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_ARTICLES });
    return fetch(`https://www.healthcare.gov/api/articles.json`)
    .then(response => response.json())
    .then(articles => dispatch({ type: actionTypes.FETCH_ARTICLES, payload: articles.articles }));
  };
};