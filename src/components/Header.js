import React from 'react';
import NavBar from './NavBar';
import '../App.css';

const Header = () => (
  <header>
    <nav>
      <NavBar />
    </nav>
    <button type="button" className="menu-toggle">Menu</button>
  </header>
);

export default Header;