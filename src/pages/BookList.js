import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from '../components/books/AddBooks';
import Books from '../components/books/Books';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer.books);
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
          />
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default BookList;
