import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../../utils/booksApi';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const dispatch = useDispatch();

  const categories = ['Action', 'Science Fiction'];

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
    setAuthorError('');
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    let error = false;
    if (title.trim() === '') {
      error = true;
      setTitleError('Please enter your title');
    } else if (author.trim() === '') {
      error = true;
      setAuthorError('Please enter your author');
    } else if (!error) {
      const AddNewBook = {
        id: uuidv4(), title, author, category,
      };

      dispatch(addBookApi(AddNewBook));
      setTitle('');
      setAuthor('');
      setCategory('');
      setTitleError('');
      setAuthorError('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmitBtn}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name of title"
            id="title"
            onChange={handleChangeTitle}
            value={title}
            required
          />
          <span>
            {titleError}
            {' '}
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Author's Name"
            id="author"
            onChange={handleChangeAuthor}
            value={author}
            required
          />
        </div>
        <span>{authorError}</span>
        <select onChange={handleChangeCategory} value={category}>
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button
          type="button"
          className="addBtn"
          onClick={handleSubmitBtn}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBooks;
