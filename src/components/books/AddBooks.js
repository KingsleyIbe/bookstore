import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookApi } from '../../utils/booksApi';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [titleError, setTitleError] = useState('');

  const dispatch = useDispatch();

  const categories = ['Action', 'Science Fiction', 'Romance', 'Horror'];

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(), title, category,
    };

    dispatch(addBookApi(newBook));
    setTitle('');
    setCategory('');
    setTitleError('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmitBtn}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name of title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <span>
            {titleError}
            {' '}
          </span>
        </div>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button
          type="submit"
          className="addBtn"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBooks;
