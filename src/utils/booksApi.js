import axios from 'axios';
import { addBook, fetchBook, removeBook } from '../redux/actions/bookActions';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books';

/* eslint-disable */

export const addBookApi = (AddNewBook) => async (dispatch) => {
  try {
    const response = await fetch(`url ${AddNewBook}`, {
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

// export const addBookApi = (AddNewBook) => async (dispatch) => {
//   try {
//     await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/books', AddNewBook);
//     dispatch(addBook(AddNewBook));
//   } catch (error) {
//     return error;
//   }
// };


export const fetchBookApi = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
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


// export const removeBookApi = (id) => async (dispatch) => {
//   try {
//     axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/${payload}`);
//     dispatch(removeBook(id));
//   } catch (error) {
//     return error;
//   }
// };


export const removeBookApi = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zzjuKZTmzip2NB6sVBcS/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch(removeBook(id));

  } catch (error) {
    throw new Error(error.message);
  }
};
