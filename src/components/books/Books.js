/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../../utils/booksApi';

const Books = ({
  item_id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (item_id) => {
    dispatch(removeBookApi(item_id));
  };

  return (
    <div>
      <ul>
        <li className="listItems">
          <p>{title}</p>
          <p>{author}</p>
          <p>{category}</p>
          <button
            type="button"
            className="delBtn"
            onClick={() => {
              handleDelete(item_id);
            }}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};

Books.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
