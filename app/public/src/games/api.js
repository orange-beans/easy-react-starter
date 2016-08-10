
import * as actions from './actions';
const {
  ToggleActive,

  RequestGames,
  RequestGamesSuccess,
  RequestGamesError,

  UpdatetGames,
  UpdateGamesSuccess,
  UpdateGamesError,
} = actions;

// Fetch user list from server
export function fetchGames() {
  return dispatch => {

    dispatch(RequestGames());

    fetch('http://localhost:3001/api/games')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then(json => {
      dispatch(RequestGamesSuccess(json));
      console.log(json);
    }

    )
    .catch(err =>
      dispatch(RequestGamesError(err))
    );
  };
}

// Fetch a searched user results from server
export function searchGames(cb) {
  fetch('http://localhost:3001/api/games')
  .then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  })
  .then((games) => {
    //console.log(games);
    cb(games);
  });
}

// Update user list to the server
export function updateGames(games = []) {
  return dispatch => {
    dispatch(UpdatetGames());
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(games),
    })
    .then(res =>
      dispatch(UpdateGamesSuccess())
    )
    .catch(err =>
      dispatch(UpdateGamesError())
    );
  };
}

export function toggleActive(user_id) {
  return dispatch => {
    dispatch(ToggleActive(user_id));
  };
}
