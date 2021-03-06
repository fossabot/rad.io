// Kudos to A.B. for this code. :+1:
import { isObject } from 'underscore';
import request from 'axios';
import { UNAUTHORIZED } from '../actions/auth';
import { createNotification } from '../actionCreators/notifications';

const apiMiddleware = store => next => action => {
  if (!isObject(action.api)) {
    return next(action);
  }

  dispatch('REQUEST', { request: action.api });
  return request(action.api)
    .then(response => {
      dispatch('RESPONSE', { payload: response.data });
    }).catch(error => {
      let response = {
        message: 'An error occurred.'
      };
      if (error && error.response) {
        response = error.response.data;
      }

      dispatch('ERROR', response);

      if (error.response && error.response.status === 401) {
        dispatchUnauthorized(response);
      }
      if (!action.ignoreErrors) {
        dispatchNotification(response);
      }
    });

  function dispatch(subtype = '', opts = {}) {
    const type = action.type || 'API_CALL';

    store.dispatch(Object.assign({}, action, {
      type: `${type}/${subtype}`,
      api: null
    }, opts));
  }

  function dispatchUnauthorized(payload) {
    if (!payload) {
      store.dispatch({
        type: UNAUTHORIZED
      });
      return;
    }

    store.dispatch({
      type: UNAUTHORIZED,
      error: payload
    });
  }

  function dispatchNotification(payload) {
    store.dispatch(createNotification('error', payload));
  }
};

export default apiMiddleware;
