/* eslint-disable camelcase */
import { ADD_BOOK, REMOVE_BOOK, FETCH_BOOK } from './types';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (item_id) => ({
  type: REMOVE_BOOK,
  payload: item_id,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});
