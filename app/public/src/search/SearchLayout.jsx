import React, { Component } from 'react';

import SearchForm from './SearchForm.jsx';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class SearchLayout extends Component{
  render() {
    return (
      <div className="search">
        <header className="search-header">
          {this.props.title}
          <SearchForm search={this.props.search} ref="child" />
        </header>
        <div className="search-results">
          {this.props.children}
        </div>
        <footer className="search-footer">
          {this.props.totalResults} Results
        </footer>
      </div>
    );
  }
}

export default CSSModules(SearchLayout, styles);
