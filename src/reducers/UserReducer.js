import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
      return { ...state, username: action.payload };
      break;
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
      break;
    case LOGIN_USER_SUCCESS:
      console.log('success');
      return state;
      break;
    case LOGIN_USER_FAIL:
      console.log('wtf');
      return state;
      break;
    default:
      return state;
  }
}
