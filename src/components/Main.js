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
import pythonLogo from '../images/Python.png';
import csharpLogo from '../images/Csharp.png';
import vercelLogo from '../images/vercel.png';

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
        <img className="logo" src={visualStudioLogo} alt="Visual Studio Logo" />
        <img className="logo" src={vscodeLogo} alt="VS Code Logo" />
        <img className="logo" src={githubLogo} alt="GitHub Logo" />
        <img className="logo" src={gitLogo} alt="Git Logo" />
        <img className="logo" src={htmlLogo} alt="HTML Logo" />
        <img className="logo" src={cssLogo} alt="CSS Logo" />
        <img className="logo" src={bootstrapLogo} alt="Bootstrap Logo" />
        <img className="logo" src={jsLogo} alt="JavaScript Logo" />
        <img className="logo" src={reactLogo} alt="React Logo" />
        <img className="logo" src={nodeLogo} alt="Node.js Logo" />
        <img className="logo" src={vercelLogo} alt="Vercel Logo" />
        <img className="logo" src={expressLogo} alt="Express.js Logo" />
        <img className="logo" src={mongodbLogo} alt="MongoDB Logo" />
        <img className="logo" src={sqlLogo} alt="SQL Logo" />
        <img className="logo" src={pythonLogo} alt="Python Logo" />
        <img className="logo" src={csharpLogo} alt="C# Logo" />
      </div>
    </div>
  </div>
);

export default Main;