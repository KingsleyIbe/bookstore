import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from '../components/books/AddBooks';
import Books from '../components/books/Books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>List of Books</h2>
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
