import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
