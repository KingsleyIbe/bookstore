import Axios from 'axios';
import { addBook, fetchBook, removeBook } from '../redux/actions/bookActions';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oF2DlchTxHbEjx4GHO3I/books';

// eslint-disable-next-line consistent-return
export const addBookApi = (formData) => async (dispatch) => {
  try {
    await Axios.post(url, formData);
    dispatch(addBook(formData));
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line consistent-return
export const fetchBookApi = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(url);
    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      book_id: key,
    }));

    const payload = Object.values(Books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line consistent-return
export const removeBookApi = (payload) => async (dispatch) => {
  try {
    await Axios.delete(`url ${payload}`);
    dispatch(removeBook(payload));
  } catch (error) {
    return error;
  }
};
