import { urls } from '../utils';

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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

const loginUserSuccess = (dispatch, token) {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token })
}

const loginUserFail = (dispatch, errors) {
  dispatch({ type: LOGIN_USER_FAILED, payload: errors })
}
