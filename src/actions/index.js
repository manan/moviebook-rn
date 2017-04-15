import { urls } from '../utils';

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
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

export const loginUser = ({ username, password }) => {

}
