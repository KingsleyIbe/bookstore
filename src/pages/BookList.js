import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBooks from '../components/books/AddBooks';
import Books from '../components/books/Books';
import { fetchBookApi } from '../utils/booksApi';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, []);

  return (
    <div className="book-container">
      <ul className="book-list">
        {books.map((book) => (
          <Books
            category={book.category}
            title={book.title}
            key={book.id}
            id={book.id}

          />
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default BookList;
