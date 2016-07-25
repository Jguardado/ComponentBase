// import 'babel/polyfill';
import * as actions from '../actions/types';

export default function selectedReducer(state = {}, action) {
  console.log('inside reducer', state);
  if (action.type == 'SELECT_COMP') {
    console.log('moving', action.payload);
    return Object.assign({}, state, { selected: action.payload });
  }

  if (action.type == 'DESELECT_COMP') {
    console.log('working in reducers', state);
    return Object.assign({}, state, { selected: 'none' });
  }

  return state;
}
