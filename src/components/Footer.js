import React from 'react';
import '../App.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Daniel Martin &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;