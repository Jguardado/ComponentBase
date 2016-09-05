import * as actions from '../actions/types';

export default function selectedReducer(state = false, action) {

  if (action.type == 'SELECT_COMP') {
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
