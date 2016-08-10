import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class GameList extends Component{

  static propTypes = {
    onToggleActive: React.PropTypes.func.isRequired,
  }
  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <div className='data-list'>
        {this.props.games.map((game) => {
          return (
            <div key={game.id} className='data-list-item'>
              <div className='details'>
                <Link to={`/games/${game.id}`}>{game.name}</Link>
              </div>
              <div className='control'>
                <button onClick={this.props.onToggleActive.bind(null, game.id)}>
                  {game.active? 'Active': 'In-active'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CSSModules(GameList, styles);
