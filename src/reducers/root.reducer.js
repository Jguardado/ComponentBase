import { combineReducers } from 'redux';
import selectedReducer from './app-reducers';

export default combineReducers({
  selected: selectedReducer,
});
