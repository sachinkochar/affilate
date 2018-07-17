import { combineReducers } from 'redux';
import test from './test';
import search from './search';
import tags from './tags';

const rootReducer = combineReducers({
  test,
  search,
  tags
});

export default rootReducer;
