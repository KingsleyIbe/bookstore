import { ADD_BOOK, REMOVE_BOOK, FETCH_BOOK } from './types';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});
