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
    
    case actionTypes.LOADING_TOPICS:
      return { ...state, loading: true, topics: [], };
    
    case actionTypes.FETCH_TOPICS:
      return { ...state, loading: false, topics: action.payload, };
    
    case actionTypes.LOADING_STATES:
      return { ...state, loading: true, states: [], };
    
    case actionTypes.FETCH_STATES:
      return { ...state, loading: false, states: action.payload, };
    
    default: return state;
  }
}