import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import middlewares
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import features
import users from './users';
import games from './games';

// apply middlewares
const loggerMiddleware = createLogger();
const middlewares = applyMiddleware(thunkMiddleware, loggerMiddleware);

// create rootReducer
const rootReducer = combineReducers({
  [users.NAME]: users.reducer,
  [games.NAME]: games.reducer,
});

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      middlewares,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
