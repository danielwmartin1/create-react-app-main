import React from 'react';
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