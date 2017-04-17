import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_AUTH,
  SET_CREDENTIALS,
  SET_AUTH_DETAILS,
  RESET_TOKEN,
  LOG_OUT
} from '../utils/types';

const INITIAL_STATE = {
  token: '',
  errors: '',
  id: -1,
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: ''
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT:
      return { ...INITIAL_STATE }
    case CLEAR_AUTH:
      return { ...INITIAL_STATE };
    case RESET_TOKEN:
      return { ...INITIAL_STATE, token: payload }
    case SET_CREDENTIALS:
      return { ...state, username: payload.username, password: payload.password }
    case SET_AUTH_DETAILS:
      return {
        ...state,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        id: payload.id,
      }
    case LOGIN_USER_SUCCESS:
      console.log('success');
      return { ...state, token: payload }
    case LOGIN_USER_FAIL:
      console.log('fail');
      return { ...state, errors: payload }
    default:
      return state;
  }
}
