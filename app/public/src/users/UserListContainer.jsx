import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import UserList from './UserList.jsx';

import { NAME } from './constants';
import * as usersApi from './api';

class UserListContainer extends Component{
  constructor(props) {
    super(props);
    // binding 'this'
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  // Note to use nextProps instead of this.props
  componentWillUpdate(nextProps) {
    this.props.updateUsers(nextProps.users);
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    // TODO: how can we update data back to the server as a side-effect
    // work-around: update everytime when render
    //this.updateUsers();
    console.log('rendering');
    return (
      <UserList users={this.props.users} onToggleActive={this.props.toggleActive}></UserList>
    );
  }
}

// put selectors here later
const mapStateToProps = (state, ownProps) => {
  return {
    users: state[NAME].users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers : () => dispatch(usersApi.fetchUsers()),
    toggleActive: (user_id) => dispatch(usersApi.toggleActive(user_id)),
    updateUsers: (users) => dispatch(usersApi.updateUsers(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
