import { combineReducers } from 'redux';
import contentReducer from './contentReducer';

const rootReducer = combineReducers({
  cpntent: contentReducer,
})

export default rootReducer;