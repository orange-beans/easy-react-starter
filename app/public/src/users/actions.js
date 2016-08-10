import { NAME } from './constants';

export const TOGGLE_ACTIVE = `${NAME}/TOGGLE_ACTIVE`;

export const REQUEST_USERS = `${NAME}/REQUEST_USERS`;
export const REQUEST_USERS_SUCCESS = `${NAME}/REQUEST_USERS_SUCCESS`;
export const REQUEST_USERS_ERROR = `${NAME}/REQUEST_USERS_ERROR`;

export const UPDATE_USERS = `${NAME}/UPDATE_USERS`;
export const UPDATE_USERS_SUCCESS = `${NAME}/UPDATE_USERS_SUCCESS`;
export const UPDATE_USERS_ERROR = `${NAME}/UPDATE_USERS_ERROR`;

// Action creators
export function RequestUsers() {
  return {
    type: REQUEST_USERS,
    payload: {},
  };
}

export function RequestUsersSuccess(users) {
  return {
    type: REQUEST_USERS_SUCCESS,
    payload: { users },
  };
}

export function RequestUsersError(error) {
  return {
    type: REQUEST_USERS_ERROR,
    payload: { error },
  };
}

export function UpdatetUsers() {
  return {
    type: UPDATE_USERS,
    payload: {},
  };
}

export function UpdateUsersSuccess(res) {
  return {
    type: UPDATE_USERS_SUCCESS,
    payload: { res },
  };
}

export function UpdateUsersError(error) {
  return {
    type: UPDATE_USERS_ERROR,
    payload: { error },
  };
}

export function ToggleActive(user_id) {
  return {
    type: TOGGLE_ACTIVE,
    payload: { id: user_id },
  };
}
