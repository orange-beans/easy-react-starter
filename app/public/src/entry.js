// The following requires are needed to use fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const mountTarget = document.getElementById('root');
const mountNode = <App />;
ReactDOM.render(mountNode, mountTarget);
