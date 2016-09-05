// import 'babel/polyfill';
import * as actions from '../actions/types';

export default function selectedReducer(state = false, action) {
  console.log('inside reducer', state);
  if (action.type == 'SELECT_COMP') {
    console.log('moving', action.payload);
    return { ...state,
      selected: action.payload,
    };
  }

  if (action.type == 'DESELECT_COMP') {
    return { ...state,
      selected: action.payload,
    };
  }

  return state;
}
