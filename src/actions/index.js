import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from '../utils/types';

export const usernameChanged = (username) => {
  return {
    type: USERNAME_CHANGED,
    payload: username
  }
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}
