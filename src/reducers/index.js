import { combineReducers } from 'redux';
import testReducer from './test';

const reducer = combineReducers({
  test: testReducer
});

export default reducer;
