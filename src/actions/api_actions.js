import axios from 'axios';

export function getComments() {
  const url = '/api/comments';
  const request = axios.get(url);

  return {
    type: COMMENT_DATA,
    payload: request,
  };
}
