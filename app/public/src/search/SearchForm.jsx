import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class SearchForm extends Component{
  render() {
    return (
      <form onSubmit={this.props.search} className="search">
        <input type="text" ref="search" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }
}

export default CSSModules(SearchForm, styles);
