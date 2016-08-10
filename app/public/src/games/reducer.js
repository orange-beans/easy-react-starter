import update from 'react-addons-update';
import _ from 'lodash';

// Actioins
import * as actions from './actions';
const {
  TOGGLE_ACTIVE,

  REQUEST_GAMES ,
  REQUEST_GAMES_SUCCESS,
  REQUEST_GAMES_ERROR,
} = actions;

// local helpers
const initialUserState = {
  isFetching: false,
  games: [],
};

// Using update addons
function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch(type) {
    case REQUEST_GAMES:
      return update(state, {
        isFetching: { $set: true },
      });

    case REQUEST_GAMES_SUCCESS:
      return update(state, {
        isFetching: { $set: false },
        games: { $set: payload.games },
      });

    case REQUEST_GAMES_ERROR:
      return update(state, {
        isFetching: { $set: false },
      });

    case TOGGLE_ACTIVE: {
      let newGames = state.games.map((user, index) => {
        if (user.id === payload.id) {
          return update(user, {
            active: { $set: !user.active },
          });
        }
        return user;
      });

      return update(state, {
        games: { $set: newGames },
      });
    }

    default:
      return state;
  }
}

export default userReducer;
