import { NAME } from './constants';

export const TOGGLE_ACTIVE = `${NAME}/TOGGLE_ACTIVE`;

export const REQUEST_GAMES = `${NAME}/REQUEST_GAMES`;
export const REQUEST_GAMES_SUCCESS = `${NAME}/REQUEST_GAMES_SUCCESS`;
export const REQUEST_GAMES_ERROR = `${NAME}/REQUEST_GAMES_ERROR`;

export const UPDATE_GAMES = `${NAME}/UPDATE_GAMES`;
export const UPDATE_GAMES_SUCCESS = `${NAME}/UPDATE_GAMES_SUCCESS`;
export const UPDATE_GAMES_ERROR = `${NAME}/UPDATE_GAMES_ERROR`;

// Action creators
export function RequestGames() {
  return {
    type: REQUEST_GAMES,
    payload: {},
  };
}

export function RequestGamesSuccess(games) {
  return {
    type: REQUEST_GAMES_SUCCESS,
    payload: { games },
  };
}

export function RequestGamesError(error) {
  return {
    type: REQUEST_GAMES_ERROR,
    payload: { error },
  };
}

export function UpdatetGames() {
  return {
    type: UPDATE_GAMES,
    payload: {},
  };
}

export function UpdateGamesSuccess(res) {
  return {
    type: UPDATE_GAMES_SUCCESS,
    payload: { res },
  };
}

export function UpdateGamesError(error) {
  return {
    type: UPDATE_GAMES_ERROR,
    payload: { error },
  };
}

export function ToggleActive(id) {
  return {
    type: TOGGLE_ACTIVE,
    payload: { id },
  };
}
