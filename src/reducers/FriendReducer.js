import {
  SET_FRIEND_DETAILS,
  LOG_OUT
} from '../utils/types';

const INITIAL_STATE = {
  followings: [],
  followers: [],
  blocked: [],
  blocked_by: []
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT:
      return { ...INITIAL_STATE }
    case SET_FRIEND_DETAILS:
      return {
        ...state,
        followings: payload.followings,
        followers: payload.followers,
        blocked: payload.blocked,
        blocked_by: payload.blocked_by,
      }
    default:
      return state;
  }
}
