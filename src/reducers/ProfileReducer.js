import {
  SET_PROFILE_DETAILS,
  LOG_OUT
} from '../utils/types';

const INITIAL_STATE = {
  bio: '',
  birth_date: '',
  gender: '',
  profile_picture: ''
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT:
      return { ...INITIAL_STATE }
    case SET_PROFILE_DETAILS:
      return {
        ...state,
        bio: payload.bio,
        birth_date: payload.birth_date,
        gender: payload.gender,
        profile_picture: payload.profile_picture,
      }
    default:
      return state;
  }
}
