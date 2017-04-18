import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import FriendReducer from './FriendReducer';

export default combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  friends: FriendReducer
})
