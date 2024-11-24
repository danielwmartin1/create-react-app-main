import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="about_main container about">
            <div className="about_main main container">
                <section className="section">
                    <h2 className="center-text">Introduction</h2>
                    <p>Welcome to my personal project! Here you will find information about me and my interests. Thank you for visiting!</p>
                </section>
                <section className="section">
                    <h2 className="center-text">Background</h2>
                    <p>I was a nurse for 15 years before deciding I wanted to become a software developer. I have been studying full-stack software development and feel comfortable in about a dozen languages and frameworks and learning more each week.</p>
                </section>
                <section className="section">
                    <h2 className="center-text">Hobbies</h2>
                    <ul className="indented-list">
                        <li>Coding</li>
                        <li>Tennis</li>
                        <li>Gardening/Landscaping</li>
                        <li>Learning new technologies</li>
                    </ul>
                </section>    
            </div>
        </div>
    );
};

export default About;