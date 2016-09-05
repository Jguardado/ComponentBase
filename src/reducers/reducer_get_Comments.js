import { COMMENT_DATA } from '../actions/get_comments';

const intialState = {};

export default function(state = intialState, action) {
  if (action.type === 'COMMENT_DATA') {
    return { ...state,
      comments: action.payload.data,
    };
  }

  return state;
}
