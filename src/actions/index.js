import { USERNAME_CHANGED } from '../utils/types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}
