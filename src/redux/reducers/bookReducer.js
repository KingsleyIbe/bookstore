import { ADD_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
