import * as types from './types';

export function selectComp(bool) {
  return {
    type: types.SELECT_COMP,
    payload: bool,
  };
}

//NOTE: Clearly this is duplication of code
export function deselect(bool) {
  return {
    type: types.DESELECT_COMP,
    payload: bool,
  };
}
