import * as actions from '../actions/types';

console.log('imported actions in reducer', actions);

export default function selectedReducer(state = {}, actions) {
  if (actions.SELECT_COMP) {
    console.log('moving');
  }

  console.log('reducer is running');
  return state;
}
