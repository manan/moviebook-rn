import {
  SET_NEWSFEED,
  SET_MY_FEED,
  LOG_OUT
} from '../utils/types';

const INITIAL_STATE = {
  my_feed: [],
  newsfeed: []
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT:
      return { ...INITIAL_STATE }
    case SET_NEWSFEED:
      return { ...state, newsfeed: payload }
    case SET_MY_FEED:
      return { ...state, my_feed: payload }
    default:
      return state;
  }
}
