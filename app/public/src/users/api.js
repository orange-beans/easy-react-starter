
import * as actions from './actions';
const {
  ToggleActive,

  RequestUsers,
  RequestUsersSuccess,
  RequestUsersError,

  UpdatetUsers,
  UpdateUsersSuccess,
  UpdateUsersError,
} = actions;

// Fetch user list from server
export function fetchUsers() {
  return dispatch => {

    dispatch(RequestUsers());

    fetch('http://localhost:3001/api/users')
    .then(res => {
      if (res.status >=400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then(json =>
      dispatch(RequestUsersSuccess(json))
    )
    .catch(err =>
      dispatch(RequestUsersError(err))
    );
  };
}

// Fetch a searched user results from server
export function searchUsers(cb) {
  fetch('http://localhost:3001/api/users')
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  })
  .then((users) => {
    //console.log(users);
    cb(users);
  });
}

// Update user list to the server
export function updateUsers(users = []) {
  return dispatch => {
    dispatch(UpdatetUsers());
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    }).then((res) => {
      console.log(res);
      dispatch(UpdateUsersSuccess());
    });
  };
}

export function toggleActive(user_id) {
  return dispatch => {
    dispatch(ToggleActive(user_id));
  };
}
