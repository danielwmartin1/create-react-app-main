import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Contact = () => {
    return (
        <main id="contact_main" className="container" style={{ textAlign: 'center' }}>
            <div className="container">
                <section className="section">
                    <h2>Contact Info</h2>
                    <Link id="anchor" to="/form" className="button">Send message</Link>
                </section>
                <section className="section background">
                    <h2>Background</h2>
                    <p>I have been a registered nurse for about 15yrs in practice, but desired a change in the direction of software development. It has become a great passion of mine and would love to contribute future projects.</p>
                </section>
            </div>
            <div className="find">
                <h2>Find me on:</h2>
                <div className="social-icons">
                    <a className="icon" href="https://www.github.com/danielwmartin1">
                        <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="GitHub" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/danielmartin82/">
                        <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt="LinkedIn" />
                    </a>
                    <a className="icon" href="https://www.facebook.com/dwm1982">
                        <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="Facebook" />
                    </a>
                    <a className="icon" href="https://www.discord.com/dwm1982/780270744650514443">
                        <img src={process.env.PUBLIC_URL + '/images/discord.png'} alt="Discord" />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;