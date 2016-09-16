import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
// Overall Page Layout Components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Top route Components
import { MainLayout } from './layout';
import { Home } from './home';
import { SearchLayout } from './search';
import { UserListContainer } from './users';
import { GameListContainer } from './games';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={MainLayout}>
            <IndexRoute component={Home}/>

            <Route path='users'>
              <Route component={SearchLayout}>
                <IndexRoute component={UserListContainer} />
              </Route>
            </Route>

            <Route path='games'>
              <Route component={SearchLayout}>
                <IndexRoute component={GameListContainer} />
              </Route>
            </Route>

          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
