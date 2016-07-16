import * as actions from '../actions/types';

export default function selectedReducer(state = {}, action) {
  console.log('inside reducer', actions);
  if (actions.SELECT_COMP) {
    console.log('moving');
  }

  console.log('reducer is running');
  return state;
}
