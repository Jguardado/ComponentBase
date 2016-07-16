import * as actions from './types';

export function selectComp() {
  console.log('selectComp is called');
  return {
    type: 'SELECT_COMP',
    payload: isSelected,
  };
}
