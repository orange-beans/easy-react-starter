import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import GameList from './GameList.jsx';

import { NAME } from './constants';
import * as gamesApi from './api';

// Test cross feature state changes
import users from '../users';
const usersApi = users.api;


class GameListContainer extends Component{
  constructor(props) {
    super(props);

    // binding 'this'
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    // TODO: how can we update data back to the server as a side-effect
    // work-around: update everytime when render
    //this.updateGames();
    console.log('rendering');
    return (
      <GameList games={this.props.games} onToggleActive={this.props.toggleActive}></GameList>
    );
  }
}

// put selectors here later
const mapStateToProps = (state, ownProps) => {
  return {
    games: state[NAME].games,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGames : () => dispatch(gamesApi.fetchGames()),
    toggleActive: (id) => {
      dispatch(gamesApi.toggleActive(id));
      // Test cross feature api
      dispatch(usersApi.toggleActive(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer);
