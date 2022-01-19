import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './reducers/bookReducer';

const reducer = combineReducers({ bookReducer });

const store = createStore(
  reducer, applyMiddleware(logger),
);

export default store;
