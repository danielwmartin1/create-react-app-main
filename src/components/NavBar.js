import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <ul className="nav-items">
        <li className="listitem"><Link to="/">Home</Link></li>
        <li className="listitem"><Link to="/about">About</Link></li>
        <li className="listitem"><Link to="/projects">Projects</Link></li>
        <li className="listitem"><Link to="/contact">Contact</Link></li>
    </ul>
);

export default NavBar;