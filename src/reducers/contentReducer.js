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
    default: return state;
  }
}