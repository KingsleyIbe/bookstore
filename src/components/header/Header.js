import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav>
      <ul className="nav-list">
        <h2 className="header-h1">Bookstore CMS</h2>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <div to="/"><FaRegUserCircle className="user-icon" size={30} style={{ color: '#0290ff', marginLeft: '30rem' }} /></div>
      </ul>
    </nav>
  </header>
);

export default Header;
