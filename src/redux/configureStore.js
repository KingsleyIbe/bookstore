import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './reducers/bookReducer';

const reducer = combineReducers({ bookReducer });

const store = createStore(
  reducer, applyMiddleware(thunk),
);

export default store;
