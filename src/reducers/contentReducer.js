import * as actionTypes from '../actions/actionTypes';

export default function contentReducer(state = {
  articles: [],
  blog: [],
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
    
    case actionTypes.LOADING_GLOSSARY:
      return { ...state, loading: true, glossary: [], };
    case actionTypes.FETCH_GLOSSARY:
      return { ...state, loading: false, glossary: action.payload, };

    case actionTypes.LOADING_ARTICLES:
      return { ...state, loading: true, articles: [], };
    case actionTypes.FETCH_ARTICLES:
      return { ...state, loading: false, articles: action.payload, };

    case actionTypes.LOADING_BLOG:
      return { ...state, loading: true, blog: [], };
    case actionTypes.FETCH_BLOG:
      return { ...state, loading: false, blog: action.payload, };

    case actionTypes.LOADING_QUESTIONS:
      return { ...state, loading: true, questions: [], };
    case actionTypes.FETCH_QUESTIONS:
      return { ...state, loading: false, questions: action.payload, };

    default: return state;
  }
}