import update from 'react-addons-update';
import _ from 'lodash';

// Actioins
import * as actions from './actions';
const { FETCH_SUCCESS, TOGGLE_ACTIVE } = actions;

// local helpers
const initialGameState = {
  games: [],
};

// Using update addons
function gameReducer(state = initialGameState, action) {
  const { type, payload } = action;
  switch(type) {
    case FETCH_SUCCESS:
      return update(state, {
        games: { $set: payload.games },
      });

    case TOGGLE_ACTIVE: {
      let newGames = state.games.map((game, index) => {
        if (game.id === payload.id) {
          return update(game, {
            active: { $set: !game.active },
          });
        }
        return game;
      });

      return update(state, {
        games: { $set: newGames },
      });
    }

    default:
      return state;
  }
}

export default gameReducer;
