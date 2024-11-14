import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import '../App.css';
import "../script.js";
import NavBar from './NavBar.js';

function Header() {
  return (
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>
  );
}

export default Header;