import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import "../script.js";
import "../header.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      {isMobile ? (
        <div className="menu_container">
          <button onClick={toggleMenu} className="menu-button">
            Menu
          </button>
          {isOpen && (
            <ul className="nav-items">
              <li className="listItem" onClick={closeMenu}><Link to="/">Home</Link></li>
              <li className="listItem" onClick={closeMenu}><Link to="/about">About</Link></li>
              <li className="listItem" onClick={closeMenu}><Link to="/projects">Portfolio</Link></li>
              <li className="listItem" onClick={closeMenu}><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="nav-items">
          <li className="listItem" ><Link to="/">Home</Link></li>
          <li className="listItem" ><Link to="/about">About</Link></li>
          <li className="listItem" ><Link to="/projects">Portfolio</Link></li>
          <li className="listItem" ><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
