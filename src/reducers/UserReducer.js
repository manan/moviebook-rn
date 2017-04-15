import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../utils/types';

const INITIAL_STATE = {
  username: '',
  password : '',
  first_name : '',
  last_name : '',
  email : '',
  token : ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case USERNAME_CHANGED:
      return { ...state, username: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER_SUCCESS:

    case LOGIN_USER_FAILED:

    default:
      return state;
  }
}
