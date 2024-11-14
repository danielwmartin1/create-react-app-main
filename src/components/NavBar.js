import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import "../script.js";


const NavBar = () => (
    <ul className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">Projects</a></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
);

export default NavBar;