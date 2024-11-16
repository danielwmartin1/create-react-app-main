import React from "react";
import "../App.css";

const Projects = () => {
    return (
        <div className='container main' style={{ color: 'white' }}>
            <h1 style={{color: 'aqua'}}>Projects</h1>
            <a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ color: 'aqua' }}>
                Visit my GitHub repository
            </a>
            <ul style={{ listStyleType: 'none' }}>
                <li><a href="https://tic-tac-toe-kohl-iota.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Project 1</a></li>
                <li><a href="https://todolist-frontend-tau.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Project 2</a></li>
                <li><a href="https://todolist-backend-six-woad.vercel.app/tasks/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Project 3</a></li>
            </ul>
        </div>
    );
};

export default Projects;