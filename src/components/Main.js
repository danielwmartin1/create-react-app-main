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
import jsLogo from '../images/JS.png';
import bootstrapLogo from '../images/bootstrap.png';
import typeScriptLogo from '../images/ts-logo-128.png';
import reactLogo from '../images/React.png';
import nodeLogo from '../images/node.png';
import nextjsLogo from '../images/next-js.svg';
import pythonDjangoLogo from '../images/django-python-logo.png';
import csharpLogo from '../images/Csharp.png';
import mongodbLogo from '../images/mongodb.svg';
import sqlLogo from '../images/SQL.png';
import viteLogo from '../images/Vitejs-logo.svg';
import vercelLogo from '../images/vercel.png';
import awsLogo from '../images/AWS.png';

const logos = [
  { src: visualStudioLogo, name: 'VisualStudio' },
  { src: vscodeLogo, name: 'VSCode' },
  { src: githubLogo, name: 'GitHub' },
  { src: gitLogo, name: 'Git' },
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: jsLogo, name: 'JavaScript' },
  { src: bootstrapLogo, name: 'Bootstrap' },
  { src: typeScriptLogo, name: 'TypeScript' },
  { src: reactLogo, name: 'React' },
  { src: nodeLogo, name: 'Node.js' },
  { src: nextjsLogo, name: 'Next.JS' },
  { src: pythonDjangoLogo, name: 'Python-Django' },
  { src: csharpLogo, name: 'C#' },
  { src: mongodbLogo, name: 'MongoDB' },
  { src: sqlLogo, name: 'SQL' },
  { src: viteLogo, name: 'ViteJS' },
  { src: vercelLogo, name: 'Vercel' },
  { src: awsLogo, name: 'AWS' }
];

const ProfileSection = () => (
  <div className="container">
    <img id="profile" src={profileImg} alt="Profile Pic" title="Profile" />
    <h1 id="name" className='headings'>Daniel Martin</h1>
    <p className="p">Hello! I'm Daniel, a passionate web developer with experience in creating dynamic and responsive web apps. I love coding and enjoy learning new technologies. In my free time, I like to work on personal projects and contribute to open-source communities.</p>
  </div>
);

const ExperienceSection = () => (
  <div className="container">
    <h2 id="experience" className='headings'>Experience</h2>
    <p className="p">With hands-on experience in web development, I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks like React. My journey has been enriched by working on diverse projects that range from small business websites to large-scale web applications. This practical experience has provided me with a deep understanding of web technologies.</p>
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
