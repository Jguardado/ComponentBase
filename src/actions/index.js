import { SELECT_COMP } from './types';
import { DESELECT_COMP } from './types';

export function selectComp(string) {
  return {
    type: SELECT_COMP,
    payload: string,
  };
}

export function deselect() {
  return {
    type: DESELECT_COMP,
  };
}
