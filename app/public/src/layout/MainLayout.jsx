import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class MainLayout extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    // Note the `className` rather than `class`
    // `class` is a reserved word in JavaScript, so JSX uses `className`
    // Ultimately, it will render with a `class` in the DOM
    return (
      <div className="app">
        <div><header className="primary-header"></header></div>
        <aside className="primary-aside">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/games'>Games</Link></li>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default CSSModules(MainLayout, styles);
