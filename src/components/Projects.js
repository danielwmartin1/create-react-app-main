import React from "react";
import "../App.css";

const Projects = () => {
    return (
        <div className='container main' style={{marginTop: '5rem', border: '3px solid aqua'}}>
            <h1 style={{margin: '2rem', color: 'white'}} >Projects</h1>
            <a style={{margin: '2rem'}} className='anchor' href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                Visit my GitHub repository
            </a>
            <ul style={{ listStyleType: 'none', margin: '2rem' }}>
                <li><a className='anchor' href="https://tic-tac-toe-kohl-iota.vercel.app/" target="_blank" rel="noopener noreferrer">Project 1</a></li>
                <li><a className='anchor' href="https://todolist-frontend-tau.vercel.app/" target="_blank" rel="noopener noreferrer" >Project 2</a></li>
                <li><a className='anchor' href="https://todolist-backend-six-woad.vercel.app/tasks/" target="_blank" rel="noopener noreferrer">Project 3</a></li>
            </ul>
        </div>
    );
};

export default Projects;