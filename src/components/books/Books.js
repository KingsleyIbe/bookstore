import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookApi } from '../../utils/booksApi';
import 'react-circular-progressbar/dist/styles.css';

const Books = ({
  id, title, category,
}) => {
  const [percentage, setPercentage] = useState(20);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookApi(id));
  };

  const handleProgress = () => {
    setPercentage((prev) => (prev + 10));
  };

  return (
    <div className="book-details-container">
      <ul>
        <li className="listItems">
          <p className="cat">{category}</p>
          <p className="title">{title}</p>
          <p className="author">Kingsley Ibe</p>
          <button type="button" className="btn">Comments</button>
          <button type="button" className="btn delbtn" onClick={() => { handleDelete(id); }}>Remove</button>
          <button type="button" className="btn">Edit</button>
        </li>
      </ul>
      <div className="progress-circle">
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div>
          <div className="progress-text">
            <h2>{`${percentage}%`}</h2>
            <h3 className="complete">Completed</h3>
          </div>
        </div>
      </div>
      <div className="update-info">
        <h3>CURRENT CHAPTER</h3>
        <h4>Chapter 17</h4>
        {percentage === 100 ? <button type="button" disabled className="progress">Completed</button> : <button type="button" onClick={handleProgress} className="progress">UPDATE PROGRESS</button>}
      </div>
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
