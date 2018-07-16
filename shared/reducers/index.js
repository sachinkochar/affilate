import { combineReducers } from 'redux';
import test from './test';
import search from './search';

const rootReducer = combineReducers({
  test,
  search
});

export default rootReducer;
