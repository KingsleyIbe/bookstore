import axios from 'axios';
import { addBook, fetchBook, removeBook } from '../redux/actions/bookActions';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books';

/* eslint-disable */

export const addBookApi = (AddNewBook) => async (dispatch) => {
  try {
    const response = await fetch(`'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books' ${AddNewBook}`, {
      method: 'POST',
      body: JSON.stringify(AddNewBook),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch(addBook(AddNewBook));

  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBookApi = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books');
    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));

    const payload = Object.values(Books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};


export const removeBookApi = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books/${payload}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch(removeBook(payload));

  } catch (error) {
    throw new Error(error.message);
  }
};
