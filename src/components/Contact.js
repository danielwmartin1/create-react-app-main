import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import facebookLogo from '../images/facebook.png';
import discordLogo from '../images/discord.png';
// eslint-disable-next-line
import Form from './Form.js';

const Contact = () => {
    return (
        <main id="contact_main" className="container" style={{ textAlign: 'center' }}>
            <div className="container">
                <section className="section">
                    <h2>Contact Info</h2>
                    <Link id="anchor" to="/form">Send message</Link>
                </section>
                <section className="section background">
                    <h2>Background</h2>
                    <p>I have been a registered nurse for about 15yrs in practice, but desired a change in the direction of software development. It has become a great passion of mine and would love to contribute future projects.</p>
                </section>
            </div>
            <div className="find">
                <h2>Find me on:</h2>
                <div className="social-icons" style={{ display: 'flex' }}>
                    <a className="icon" href="https://www.github.com/danielwmartin1">
                        <img className="logo" src={githubLogo} alt="GitHub Logo" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/danielmartin82/">
                        <img className="logo" src={linkedinLogo} alt="Linkedin Logo" />
                    </a>
                    <a className="icon" href="https://www.facebook.com/dwm1982">
                        <img className="logo" src={facebookLogo} alt="Facebook" />
                    </a>
                    <a className="icon" href="https://www.discord.com/dwm1982/780270744650514443">
                        <img className="logo" src={discordLogo} alt="Discord" />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;