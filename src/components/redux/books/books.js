import React from 'react';

const books = () => {
  return (
    <div>
      <ul>
        <li>Book sample</li>
        <li>Book sample</li>
        <li>Book sample</li>
      </ul>
      <form>
        <input type="text" placeholder="Add new book"/>
        <button type="button">Add</button>
      </form>
    </div>
  )
};

export default books;