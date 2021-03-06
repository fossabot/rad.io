import {
  LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT,
  FETCH_PROFILE_RESPONSE, FETCH_PROFILE_ERROR,
  UNAUTHORIZED
} from '../actions/auth';

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  if (action.type === LOGIN_RESPONSE ||
      action.type === FETCH_PROFILE_RESPONSE) {
    const token = action.payload.token || action.token;
    const payload = action.payload;

    return Object.assign({}, state, {
      loading: false,
      user: payload.user,
      token: token
    });
  }

  if (action.type === FETCH_PROFILE_ERROR ||
      action.type === UNAUTHORIZED ||
      action.type === LOGOUT) {
    return initialState;
  }

  return state;
};
