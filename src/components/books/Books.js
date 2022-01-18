import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/actions/bookActions';

const Books = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(Books.id));
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

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
