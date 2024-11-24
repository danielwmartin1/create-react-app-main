import React from 'react';
import '../App.css';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import facebookLogo from '../images/facebook.png';
import discordLogo from '../images/discord.png';
import '../buttons.css'
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <main id="contact_main" className="container" style={{ textAlign: 'center', marginBottom: '6.5rem' }}>
            <div className="container">
                <section className="section">
                    <h2>Contact Info</h2>
                    <Link to="/form">
                        <button className="menu-button">Send Message</button>
                    </Link>
                </section>
                <section className="section background">
                    <h2>Background</h2>
                    <p>I have been a registered nurse for about 15yrs in practice, but desired a change in the direction of software development. It has become a great passion of mine and would love to contribute future projects.</p>
                </section>
            </div>
            <div className="find">
                <h2>Find me on:</h2>
                <div className="social-icons" style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                    <a className="icon" href="https://www.github.com/danielwmartin1" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={githubLogo} alt="GitHub Logo" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/danielmartin82/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={linkedinLogo} alt="Linkedin Logo" />
                    </a>
                    <a className="icon" href="https://www.facebook.com/dwm1982" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={facebookLogo} alt="Facebook" />
                    </a>
                    <a className="icon" href="https://www.discord.com/dwm1982/780270744650514443" target="_blank" rel="noopener noreferrer">
                        <img className="logo" style={{height: '75px', width: '75px', }} src={discordLogo} alt="Discord" />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;