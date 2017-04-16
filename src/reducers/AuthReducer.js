import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_AUTH
} from '../utils/types';

const INITIAL_STATE = {
  token: '',
  errors: '',
  isAuthenticated: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_AUTH:
      return { ...INITIAL_STATE };
    case LOGIN_USER_SUCCESS:
      console.log('success');
      return { ...state, token: action.payload, isAuthenticated: true }
    case LOGIN_USER_FAIL:
      console.log('fail');
      return { ...state, errors: action.payload, isAuthenticated: false }
    default:
      return state;
  }
}
