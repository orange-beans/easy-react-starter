import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class UserList extends Component{

  static propTypes = {
    onToggleActive: React.PropTypes.func.isRequired,
  }
  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <div className='data-list'>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className='data-list-item'>
              <div className='details'>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </div>
              <div className='control'>
                <button onClick={this.props.onToggleActive.bind(null, user.id)}>
                  {user.active? 'Active': 'In-active'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CSSModules(UserList, styles);
