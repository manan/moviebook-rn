import { Actions } from 'react-native-router-flux';
import { urls, params } from '../utils';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_AUTH,
  SET_AUTH_DETAILS,
  SET_CREDENTIALS,
  SET_PROFILE_DETAILS,
  SET_FRIEND_DETAILS,
  RESET_TOKEN,
  LOG_OUT
} from '../utils/types';

// Actions

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    requestToken({ username, password })
    .then(response => response.json())
    .then(data => {
      const { token_response, non_field_errors } = params;
      if (data[token_response] !== undefined) {
        loginUserSuccess(dispatch, { token: data[token_response], username, password });
      } else {
        loginUserFail(dispatch, data[non_field_errors][0]);
      }
    });
  }
}

export const logout = () => {
  Actions.auth();
  return { type: LOG_OUT }
}

export const clearAuth = () => {
  return { type: CLEAR_AUTH }
};

// Action Helpers

const loginUserSuccess = (dispatch, credentials) => {
  const { username, password, token } = credentials;
  dispatch({ type: SET_CREDENTIALS, payload: { username, password } });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
  getProfileDetails(dispatch, { username, password, token });
  Actions.home();
};

const loginUserFail = (dispatch, errors) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errors });
};

const getProfileDetails = (dispatch, credentials) => {
  getData(dispatch, requestProfileDetails, setProfileDetails, credentials);
}

// Request Functions

const requestProfileDetails = ({ token }) => {
  const requestParams = {
    method: 'GET',
    headers: { Authorization: params.token_request + token },
  }
  return fetch(urls.base_url + urls.self_profile_details, requestParams) // eslint-disable-line
}

const requestToken = ({ username, password }) => {
  const requestParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      [params.username]: username,
      [params.password]: password })
  }
  return fetch(urls.base_url + urls.token_auth, requestParams) // eslint-disable-line
}

// Storage Functions

const setProfileDetails = (dispatch, data) => {
  const {
    first_name,
    last_name,
    email,
    user,
    gender,
    bio,
    birth_date,
    profile_picture,
    followings,
    followers,
    blocked,
    blocked_by,
  } = params;
  dispatch({
    type: SET_AUTH_DETAILS,
    payload: {
      id: data[user],
      first_name: data[first_name],
      last_name: data[last_name],
      email: data[email]
    }
  });

  dispatch({
    type: SET_PROFILE_DETAILS,
    payload: {
      gender: data[gender],
      bio: data[bio],
      birth_date: data[birth_date],
      profile_picture: data[profile_picture]
    }
  });
  dispatch({
    type: SET_FRIEND_DETAILS,
    payload: {
      followings: data[followings],
      followers: data[followers],
      blocked: data[blocked],
      blocked_by: data[blocked_by]
    }
  });
}

// Abstract Functions

const getData = (dispatch, requestFunc, storeFunc, credentials) => {
  const { username, password, token } = credentials;
  requestFunc({ token })
  .then(response => {
    if (response.ok) {
      response.json()
      .then(data => {
        storeFunc(dispatch, data);
      })
    } else {
      requestToken({ username, password })
      .then(tokenresponse => {
        if (tokenresponse.ok) {
          tokenresponse.json()
          .then(tokendata => {
            const { token_response } = params;
            dispatch({ type: RESET_TOKEN, payload: tokendata[token_response] });
            requestFunc({ token: tokendata[token_response] })
            .then(userresponse => userresponse.json())
            .then(userdata => {
              storeFunc(dispatch, userdata);
            })
          })
        } else {
          logout();
        }
      })
    }
  })
}

// export const getSelfDetails = (dispatch, { username, password, token }) => {
//   requestUserDetails({ token })
//   .then(response => {
//     if (response.ok) {
//       response.json()
//       .then(data => {
//         setAuthDetails(dispatch, data);
//       })
//     } else {
//       getToken({ username, password })
//       .then(tokenresponse => {
//         if (tokenresponse.ok) {
//           tokenresponse.json()
//           .then(tokendata => {
//             const { token_response } = params;
//             dispatch({ type: RESET_TOKEN, payload: tokendata[token_response] });
//             requestUserDetails({ token: tokendata[token_response] })
//             .then(userresponse => userresponse.json())
//             .then(userdata => {
//               setAuthDetails(dispatch, userdata);
//             })
//           })
//         } else {
//           logout();
//         }
//       })
//     }
//   })
// }

// export const getSelfDetails = (dispatch, { username, password, token }) => {
//   requestUserDetails({ token })
//   .then(response => { console.log(response); return response.json(); })
//   .then(data => {
//     console.log('data received');
//     console.log(data);
//     const { id, detail, signature_expired } = params;
//     if (data[id] !== undefined) {
//       setAuthDetails(dispatch, data);
//     } else if (data[detail] === signature_expired) {
//       getToken({ username, password })
//       .then(tokenresponse => tokenresponse.json())
//       .then(tokendata => {
//         const { token_response } = params;
//         if (tokendata[token_response] !== undefined) {
//           dispatch({ type: RESET_TOKEN, payload: tokendata[token_response] });
//           requestUserDetails({ token: tokendata[token_response] })
//           .then(userresponse => userresponse.json())
//           .then(userdata => {
//             setAuthDetails(dispatch, userdata);
//           })
//         } else {
//           logout();
//         }
//       })
//     } else {
//       logout();
//     }
//   })
// }
