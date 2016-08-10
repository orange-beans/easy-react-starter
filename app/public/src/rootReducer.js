import { combineReducers } from 'redux';

import users from './users';
import games from './games';

const rootReducer = combineReducers({
  [users.NAME]: users.reducer,
  [games.NAME]: games.reducer,
});

export default rootReducer;
