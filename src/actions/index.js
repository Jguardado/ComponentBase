import { SELECT_COMP } from './types';
import { DESELECT_COMP } from './types';

export function selectComp(bool) {
  return {
    type: SELECT_COMP,
    payload: bool,
  };
}

//NOTE: Clearly this is duplication of code
export function deselect(bool) {
  return {
    type: DESELECT_COMP,
    payload: bool,
  };
}
