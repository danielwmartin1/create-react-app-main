import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="about_main container about">
            <div className="about_main main container">
                <section className="section">
                    <h2 className="center-text">Introduction</h2>
                    <p>
                        Welcome to my personal project! Here you will find information about me and my interests. Thank you for visiting!
                    </p>
                </section>
                <section className="section">
                    <h2 className="center-text">Background</h2>
                    <p>
                        I dedicated 15 years as a nurse to helping others and solving complex healthcare challenges, honing analytical skills, attention to detail, and critical thinking. Driven by a passion for problem-solving, I transitioned into software development, focusing on creating innovative solutions through technology. Over the past few years, I’ve mastered full-stack development, working with languages and frameworks like JavaScript, Python, React, and Node.js. I thrive on continuous learning, tackling new challenges, and exploring emerging technologies to deepen my expertise and contribute to impactful tech projects.
                    </p>
                </section>
                <section className="section">
                    <h2 className="center-text">Hobbies</h2>
                    <ul className="indented-list">
                        <li>Coding</li>
                        <li>Tennis</li>
                        <li>Gaming</li>
                        <li>Gardening/Landscaping</li>
                        <li>Learning new technologies</li>
                    </ul>
                </section>    
            </div>
        </div>
    );
};

export default About;