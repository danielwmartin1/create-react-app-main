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
            <div className="container contact-container">
                <div>
                    <p className="contact">Thank you for visiting my portfolio! I hope you enjoyed it. If you have any questions or would like to contact me, please feel free to do so. I look forward to hearing from you!</p>
                </div>
                <section className="section" style={{marginTop: "4rem"}}>
                    <h2 className='contact'>Contact Me:</h2>
                    <Link to="/form">
                        <button className="menu-button" onClick={() => window.open('/form', '_blank')}>Send Message</button>
                    </Link>
                </section>
            </div>
            <div className="find">
                <h2 className='contact'>Find me on:</h2>
                <div className="social-icons" style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                    <a className="icon" href="https://www.github.com/danielwmartin1" target="_blank" rel="noopener noreferrer">
                        <img className="small-logo" src={githubLogo} alt="GitHub" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/danielmartin82/" target="_blank" rel="noopener noreferrer">
                        <img className="small-logo" src={linkedinLogo} alt="Linkedin" />
                    </a>
                    <a className="icon" href="https://www.facebook.com/dwm1982" target="_blank" rel="noopener noreferrer">
                        <img className="small-logo" src={facebookLogo} alt="Facebook" />
                    </a>
                    <a className="icon" href="https://www.discord.com/dwm1982/780270744650514443" target="_blank" rel="noopener noreferrer">
                        <img className="small-logo" style={{height: '60px', width: '60px', }} src={discordLogo} alt="Discord" />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;