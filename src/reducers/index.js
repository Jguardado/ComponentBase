import { combineReducer } from 'redux';
import { selectedReducer as selected } from './app-reducers';

export const rootreducer = combineReducer({
  selected,
});
