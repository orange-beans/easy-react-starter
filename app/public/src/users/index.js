import _UserList from './UserList.jsx';
import _UserListContainer from './UserListContainer.jsx';

import reducer from './reducer';
import { NAME } from './constants';
import * as actions from './actions';
import * as api from './api';

export class UserList extends _UserList {}
export class UserListContainer extends _UserListContainer {}

export default { reducer, actions, api, NAME };
