import { PROFILE_BIND_EMAIL, PROFILE_CREATE, PROFILE_REQUESTED, PROFILE_SHARED, PROFILE_UPDATE } from '../modules/user';
import * as user from '../services/userService';
import store from '../store';

/**
 * Profile create
 */
export function create() {
  return async dispatch => {
    dispatch({
      type: PROFILE_REQUESTED
    });
    const { data } = await user.create();

    return dispatch({
      type: PROFILE_CREATE,
      payload: data
    });
  };
}

/**
 * Profile update
 */
export function update() {
  return async dispatch => {
    dispatch({
      type: PROFILE_REQUESTED
    });
    let { id, email, shared } = store.getState().user.profile;
    const { data } = await user.update({ id: id, email: email, shared: shared });

    return dispatch({
      type: PROFILE_UPDATE,
      payload: data
    });
  };
}

/**
 * Shared social
 */
export function shared() {
  return dispatch => {
    dispatch({
      type: PROFILE_SHARED,
      payload: {
        shared: true
      }
    });

    return dispatch(update());
  };
}

/**
 * Bind email
 */
export function bindEmail(email) {
  return dispatch => {
    dispatch({
      type: PROFILE_BIND_EMAIL,
      payload: {
        email: email
      }
    });

    return dispatch(update());
  };
}