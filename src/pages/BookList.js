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
  }, [dispatch]);

  const progress = () => Math.floor(Math.random() * 70);
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <Books
            key={book.item_id}
            title={book.title}
            author={book.author}
            chapter={`${progress()}`}
            id={book.item_id}
            category={book.category}
          />
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default BookList;
