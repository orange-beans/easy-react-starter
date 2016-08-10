import _GameList from './GameList.jsx';
import _GameListContainer from './GameContainer.jsx';

import reducer from './reducer';
import { NAME } from './constants';
import * as actions from './actions';
import * as api from './api';

export class GameList extends _GameList {}
export class GameListContainer extends _GameListContainer {}

export default { reducer, actions, api, NAME };
