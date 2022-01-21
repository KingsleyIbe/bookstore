/* eslint-disable */
import axios from 'axios';
import { addBook, fetchBook, removeBook } from '../redux/actions/bookActions';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const addBookApi = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = {
    item_id: id,
    category,
    title,
  };
  await axios.post(`${baseURL}/apps/O19GKUSZwAvUhT9yO2HG/books`, newBook);
  dispatch(addBook(payload));
};

export const fetchBookApi = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O19GKUSZwAvUhT9yO2HG/books');
    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      id: key,
    }));

    const payload = Object.values(Books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};

export const removeBookApi = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O19GKUSZwAvUhT9yO2HG/books/${payload}`, {
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
