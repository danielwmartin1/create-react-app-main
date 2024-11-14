import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import "../script.js";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub Repos</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;