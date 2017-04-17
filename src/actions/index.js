import { Actions } from 'react-native-router-flux';
import { urls, params } from '../utils';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_AUTH,
  SET_AUTH_DETAILS,
  RESET_TOKEN,
  LOG_OUT
} from '../utils/types';

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    getToken({ username, password })
    .then(response => response.json())
    .then(data => {
      const { token_response, non_field_errors } = params;
      if (data[token_response] !== undefined) {
        loginUserSuccess(dispatch, data[token_response]);
      } else {
        loginUserFail(dispatch, data[non_field_errors][0]);
      }
    });
  }
}

const loginUserSuccess = (dispatch, token) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
  Actions.home();
};

const loginUserFail = (dispatch, errors) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errors });
};

export const getSelfDetails = ({ username, password, token }) => {
  return (dispatch) => {
    requestUserDetails({ token })
    .then(response => response.json())
    .then(data => {
      const { id, detail, signature_expired } = params;
      if (data[id] !== undefined) {
        setAuthDetails(dispatch, data);
      } else if (data[detail] === signature_expired) {
        getToken({ username, password })
        .then(tokenresponse => tokenresponse.json())
        .then(tokendata => {
          const { token_response } = params;
          if (tokendata[token_response] !== undefined) {
            dispatch({ type: RESET_TOKEN, payload: tokendata[token_response] });
            requestUserDetails({ token: tokendata[token_response] })
            .then(userresponse => userresponse.json())
            .then(userdata => {
              setAuthDetails(dispatch, userdata);
            })
          } else {
            logout();
          }
        })
      } else {
        logout();
      }
    })
  }
}

const setAuthDetails = (dispatch, data) => {
  const { first_name, last_name, email, id } = params;
  dispatch({
    type: SET_AUTH_DETAILS,
    payload: {
      id: data[id],
      first_name: data[first_name],
      last_name: data[last_name],
      email: data[email]
    }
  });
}

const requestUserDetails = ({ token }) => {
  const requestParams = {
    method: 'GET',
    headers: { 'Authorization': params.token_request + token },
  }
  return fetch(urls.base_url + urls.self_user_details, requestParams) // eslint-disable-line
}

const getToken = ({ username, password }) => {
  const requestParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      [params.username]: username,
      [params.password]: password })
  }
  return fetch(urls.base_url + urls.token_auth, requestParams) // eslint-disable-line
}

export const clearAuth = () => {
  return { type: CLEAR_AUTH }
};

export const logout = () => {
  Actions.auth();
  return { type: LOG_OUT }
}
