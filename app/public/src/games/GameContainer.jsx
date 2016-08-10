import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import GameList from './GameList.jsx';

import { NAME } from './constants';
import * as gameApi from './api';
import * as actions from './actions';
const { FetchSucess, ToggleActive } = actions;

class GameListContainer extends Component{
  constructor(props) {
    super(props);

    // binding 'this'
  }

  componentDidMount() {
    gameApi.fetchGames(this.props.onFetchSuccess);
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    // TODO: how can we update data back to the server as a side-effect
    // work-around: update everytime when render
    //this.updateGames();
    console.log('rendering');
    return (
      <GameList games={this.props.games} onToggleActive={this.props.onToggleActive}></GameList>
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
    onFetchSuccess: (games) => dispatch(FetchSucess(games)),
    onToggleActive: (id) => dispatch(ToggleActive(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer);
