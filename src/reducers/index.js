import { combineReducers } from 'redux';
import selectedReducer from './app-reducers';

console.log('imported reducer', selectedReducer);

export default combineReducers({
  selected: selectedReducer,
});
