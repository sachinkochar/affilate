import { combineReducers } from 'redux';
import fetchSignup from './signup';
import search from './search';
import tags from './tags';

const rootReducer = combineReducers({
  fetchSignup,
  search,
  tags
});

export default rootReducer;
