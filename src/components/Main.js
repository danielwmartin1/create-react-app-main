import React from 'react';
import '../App.css';
import '../main.css';
import '../buttons.css';

import profileImg from '../images/profile.jpg';
import visualStudioLogo from '../images/visualstudio.png';
import vscodeLogo from '../images/vscode.png';
import githubLogo from '../images/github.png';
import gitLogo from '../images/git.png';
import htmlLogo from '../images/HTML.png';
import cssLogo from '../images/CSS.png';
import bootstrapLogo from '../images/bootstrap.png';
import tailwindLogo from '../images/tailwind.png';
import jsLogo from '../images/JS.png';
import typeScriptLogo from '../images/ts-logo-128.png';
import reactLogo from '../images/React.png';
import nodeLogo from '../images/node.png';
import expressLogo from '../images/express.png';
import nextjsLogo from '../images/next-js.svg';
import pythonDjangoLogo from '../images/django-python-logo.png';
import csharpLogo from '../images/Csharp.png';
import mongodbLogo from '../images/mongodb.svg';
import sqlLogo from '../images/SQL.png';
import viteLogo from '../images/Vitejs-logo.svg';
import vercelLogo from '../images/vercel.svg'

const logos = [
  { src: visualStudioLogo, name: 'VisualStudio' },
  { src: vscodeLogo, name: 'VSCode' },
  { src: githubLogo, name: 'GitHub' },
  { src: gitLogo, name: 'Git' },
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: bootstrapLogo, name: 'Bootstrap' },
  { src: tailwindLogo, name: 'TailwindCSS' },
  { src: jsLogo, name: 'JavaScript' },
  { src: typeScriptLogo, name: 'TypeScript' },
  { src: reactLogo, name: 'React' },
  { src: nodeLogo, name: 'Node.js' },
  { src: expressLogo, name: 'Express.JS' },
  { src: nextjsLogo, name: 'Next.JS' },
  { src: pythonDjangoLogo, name: 'Python-Django' },
  { src: csharpLogo, name: 'C#' },
  { src: mongodbLogo, name: 'MongoDB' },
  { src: sqlLogo, name: 'SQL' },
  { src: viteLogo, name: 'ViteJS' },
  { src: vercelLogo, name: 'Vercel' }
];

const ProfileSection = () => (
  <div className="container">
    <img id="profile" src={profileImg} alt="Profile Pic" title="Profile" />
    <h1 id="name" className='headings'>Daniel Martin</h1>
    <p className="p">
    Welcome! I’m a full-stack developer passionate about technology and problem-solving. Over the past few years, I’ve honed my skills in programming languages like JavaScript and Python, as well as frameworks such as React and Node.js. I thrive in innovative environments, embrace continuous learning, and love exploring emerging technologies to create impactful solutions. Let’s build something amazing together!</p>
  </div>
);

const ExperienceSection = () => (
  <div className="container">
    <h2 id="experience" className='headings'>Experience</h2>
    <p className="p">
      With extensive hands-on experience in web development, I have developed strong expertise in HTML, CSS, JavaScript, and modern frameworks such as React. My journey includes working on a wide range of projects, from small business websites to large-scale web applications, giving me a comprehensive understanding of web technologies and their practical applications.
    </p>
  </div>
);

const TechnologiesSection = () => (
  <div className="container">
    <h2 id="tech" className='headings'>Technologies</h2>
    <div className="logos">
      {logos.map((logo, index) => (
        <img key={index} className="logo" id={logo.name} src={logo.src} alt={`${logo.name} Logo`} title={`${logo.name} Logo`} />
      ))}
    </div>
  </div>
);

const Main = () => (
  <div className="container">
    <ProfileSection />
    <ExperienceSection />
    <TechnologiesSection />
  </div>
);

export default Main;
