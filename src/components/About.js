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
                    <p>I spent 15 years as a nurse, dedicating my career to helping others and solving complex challenges in healthcare. During this time, I developed strong analytical skills, attention to detail, and a knack for critical thinking—qualities that became invaluable as I transitioned into software development.

My decision to pivot into tech was driven by a passion for problem-solving and a desire to create innovative solutions through technology. Over the past few years, I have immersed myself in full-stack software development, mastering a wide range of programming languages and frameworks. From JavaScript and Python to React and Node.js, I’ve built a strong technical foundation and gained hands-on experience through diverse projects.

I thrive on continuous learning and actively seek out new challenges to deepen my expertise. Each week brings opportunities to explore emerging technologies and refine my skills, making me adaptable and eager to contribute to impactful projects in the tech industry.</p>
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