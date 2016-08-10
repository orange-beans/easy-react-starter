import { NAME } from './constants';

export const FETCH_SUCCESS = `${NAME}/FETCH_SUCCESS`;
export const TOGGLE_ACTIVE = `${NAME}/TOGGLE_ACTIVE`;

// Action creators
export function FetchSucess(games) {
  return {
    type: FETCH_SUCCESS,
    payload: { games },
  };
}

export function ToggleActive(id) {
  return {
    type: TOGGLE_ACTIVE,
    payload: { id },
  };
}
