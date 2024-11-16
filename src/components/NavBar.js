import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import "../script.js";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {isMobile ? (
        <div>
          <button onClick={toggleMenu} className="menu-button">
            Menu
          </button>
          {isOpen && (
            <ul className="nav-items">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">Projects</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">Projects</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;