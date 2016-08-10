import update from 'react-addons-update';
import _ from 'lodash';

// Actioins
import * as actions from './actions';
const {
  TOGGLE_ACTIVE,

  REQUEST_USERS ,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_ERROR,
} = actions;

// local helpers
const initialUserState = {
  isFetching: false,
  users: [],
};

// Using update addons
function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch(type) {
    case REQUEST_USERS:
      return update(state, {
        isFetching: { $set: true },
      });

    case REQUEST_USERS_SUCCESS:
      return update(state, {
        isFetching: { $set: false },
        users: { $set: payload.users },
      });

    case REQUEST_USERS_ERROR:
      return update(state, {
        isFetching: { $set: false },
      });

    case TOGGLE_ACTIVE: {
      let newUsers = state.users.map((user, index) => {
        if (user.id === payload.id) {
          return update(user, {
            active: { $set: !user.active },
          });
        }
        return user;
      });

      return update(state, {
        users: { $set: newUsers },
      });
    }

    default:
      return state;
  }
}

export default userReducer;
