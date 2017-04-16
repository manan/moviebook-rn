import { urls } from '../utils';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../utils/types';


export const usernameChanged = (username) => ({
    type: USERNAME_CHANGED,
    payload: username
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    fetch(urls.base_url + urls.token_auth, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => { return response.json() })
    .then(data => console.log(data));
  }
}

const loginUserSuccess = (dispatch, token) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
};

const loginUserFail = (dispatch, errors) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errors });
};
