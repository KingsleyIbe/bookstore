import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../actions/bookActions';
import AddBooks from './AddBooks';

const books = ({
  id, author, title, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
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
              handleDelete(id);
            }}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};

books.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default books;
