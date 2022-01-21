import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookApi } from '../../utils/booksApi';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [titleError, setTitleError] = useState('');

  const dispatch = useDispatch();

  const categories = ['Category', 'Action', 'Science Fiction', 'Romance', 'Economy', 'Technology'];

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
        <h1>ADD NEW Book</h1>
        <div className="form-group">
          <div className="form-flex">
            <input
              className="text-input"
              type="text"
              placeholder="BOOK TITLE"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            <span>
              {titleError}
              {' '}
            </span>
          </div>
          <select className="category" onChange={(e) => setCategory(e.target.value)} value={category}>
            {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
          </select>
          <button type="submit" className="addBtn"> ADD BOOK </button>
        </div>
      </form>
    </div>
  );
};
export default AddBooks;
