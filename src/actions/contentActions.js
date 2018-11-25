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