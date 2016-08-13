import axios from 'axios';

export const COMMENT_DATA = 'COMMENT_DATA';

export function getComments() {
  const url = '/api/comments';
  const request = axios.get(url);

  return {
    type: COMMENT_DATA,
    payload: request,
  };
}
