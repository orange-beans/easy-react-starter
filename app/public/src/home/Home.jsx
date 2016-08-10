import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Hello React SPA boilerPlate</h1>
        <p>
          see the following
          <a href="https://github.com/orange-beans/React-SPA-boilerplate"> git </a>
          for more details.
        </p>
      </div>
    );
  }
}

export default CSSModules(Home, styles);
