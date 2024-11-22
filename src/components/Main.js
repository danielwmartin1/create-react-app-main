import React from 'react';
import '../App.css';
import profileImg from '../images/profile.jpg';
import visualStudioLogo from '../images/visualstudio.png';
import vscodeLogo from '../images/vscode.png';
import githubLogo from '../images/github.png';
import gitLogo from '../images/git.png';
import htmlLogo from '../images/HTML.png';
import cssLogo from '../images/CSS.png';
import bootstrapLogo from '../images/bootstrap.png';
import jsLogo from '../images/JS.png';
import reactLogo from '../images/React.png';
import nodeLogo from '../images/node.png';
import expressLogo from '../images/express.webp';
import mongodbLogo from '../images/mongodb.png';
import sqlLogo from '../images/SQL.png';
import pythonDjangoLogo from '..//images/django-python-logo.png';
import csharpLogo from '../images/Csharp.png';
import vercelLogo from '../images/vercel.png';


const logos = [
  { src: visualStudioLogo, name: 'Visual Studio' },
  { src: vscodeLogo, name: 'VS Code' },
  { src: githubLogo, name: 'GitHub' },
  { src: gitLogo, name: 'Git' },
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: bootstrapLogo, name: 'Bootstrap' },
  { src: jsLogo, name: 'JavaScript' },
  { src: reactLogo, name: 'React' },
  { src: nodeLogo, name: 'Node.js' },
  { src: expressLogo, name: 'Express' },
  { src: mongodbLogo, name: 'MongoDB' },
  { src: sqlLogo, name: 'SQL' },
  { src: pythonDjangoLogo, name: 'Python/Django' },
  { src: csharpLogo, name: 'C#' },
  { src: vercelLogo, name: 'Vercel' },
];

const Main = () => (
  <div className="container main">
    <img id="profile" src={profileImg} alt="Profile" />
    <h1 id="name">Daniel Martin</h1>
    <p className="p">Hello! I'm Daniel, a passionate web developer with experience in creating dynamic and responsive websites. I love coding and enjoy learning new technologies. In my free time, I like to work on personal projects and contribute to open-source communities.</p>
    <h2 id="experience">Experience</h2>
    <p className="p">With hands-on experience in web development, I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks like React. My journey has been enriched by working on diverse projects that range from small business websites to large-scale web applications. This practical experience has provided me with a deep understanding of web technologies.</p>
    <div className="container logo-container">
      <h2 id="tech">Technologies</h2>
      <div className="logos">
        {logos.map((logo, index) => (
          <img key={index} className="logo" src={logo.src} alt={`${logo.name} Logo`} />
        ))}
      </div>
    </div>
  </div>
);

export default Main;
