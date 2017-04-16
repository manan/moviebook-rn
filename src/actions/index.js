import { Actions } from 'react-native-router-flux';
import { urls, params } from '../utils';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_AUTH,
} from '../utils/types';

const loginUserSuccess = (dispatch, token) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token });

  Actions.homeScreen();
};

const loginUserFail = (dispatch, errors) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errors });
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    const body = {}
    body[params.username] = username;
    body[params.password] = password;
    const requestParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    fetch(urls.base_url + urls.token_auth, requestParams) // eslint-disable-line
    .then(response => response.json())
    .then(data => {
      const { token_response, non_field_errors } = params;
      if (data[token_response] !== undefined) {
        loginUserSuccess(dispatch, data[token_response]);
      } else {
        loginUserFail(dispatch, data[non_field_errors])
      }
    });
  }
}

export const clearAuth = () => {
  return { type: CLEAR_AUTH }
};
