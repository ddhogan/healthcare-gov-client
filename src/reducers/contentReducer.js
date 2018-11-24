import * as actionTypes from '../actions/actionTypes';

export default function contentReducer(state = {
  articles: [],
  blogs: [],
  questions: [],
  glossary: [],
  states: [],
  topics: [],
}, action) {
  switch(action.type){
    case actionTypes.FETCH_STATES:
      return {...state, states: action.payload};
    case actionTypes.FETCH_TOPICS:
      return {...state, topics: action.payload};
    default: return state;
  }
}