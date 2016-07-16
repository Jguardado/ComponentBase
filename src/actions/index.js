import { SELECT_COMP } from './types';
// console.log('this is the imported types', types);

export function selectComp(string) {
  return {
    type: SELECT_COMP,
    payload: string,
  };
}
