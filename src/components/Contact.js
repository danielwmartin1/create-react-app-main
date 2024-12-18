import React from 'react';
import '../App.css';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import facebookLogo from '../images/facebook.png';
import discordLogo from '../images/discord.png';
import '../buttons.css';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, src, alt }) => (
  <a className="icon" href={href} title={alt} target="_blank" rel="noopener noreferrer">
    <img className="small-logo" src={src} alt={alt} />
  </a>
);

const ContactMessage = () => (
  <div>
    <p className="contact">Thank you for visiting my portfolio! I hope you enjoyed it. If you have any questions or would like to contact me, please feel free to do so. I look forward to hearing from you!</p>
  </div>
);

const Contact = () => {
  return (
    <main id="contact_main" className="container" style={{ textAlign: 'center', marginBottom: '6.5rem' }}>
      <div className="container contact-container">
        <ContactMessage />
        <section className="section">
          <h2 className='contact'>Contact Me:</h2>
          <Link to="/form">
            <button title={"Contact Form"} className="menu-button" onClick={() => window.open('/form', '_blank')}>Send Message</button>
          </Link>
        </section>
      </div>
      <div className="find">
        <h2 className='contact'>Find me on:</h2>
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SocialIcon href="https://www.github.com/danielwmartin1" src={githubLogo} alt="GitHub" />
          <SocialIcon href="https://www.linkedin.com/in/danielmartin82/" src={linkedinLogo} alt="LinkedIn" />
          <SocialIcon href="https://www.facebook.com/daniel.martin" src={facebookLogo} alt="Facebook" />
          <SocialIcon href="https://discord.com/users/danielmartin" src={discordLogo} alt="Discord" />
        </div>
      </div>
    </main>
  );
};

export default Contact;