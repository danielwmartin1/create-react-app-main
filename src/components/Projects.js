import React from "react";
import "../App.css";

const Projects = () => {
    return (
        <div className='container main' style={{ border: '3px solid aqua', marginTop: '2rem'}}>
            <h1 style={{marginBottom: '3rem', color: 'var(--text-color)'}} >Portfolio</h1>
            <a style={{margin: '2rem'}} className='anchor project' href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                Check out my GitHub Repositories Page
            </a>
            <ul style={{ listStyleType: 'none' }}>
                <li><a className='anchor project' href="https://tic-tac-toe-kohl-iota.vercel.app/" target="_blank" rel="noopener noreferrer">Project 1</a></li>
                <li><a className='anchor project' href="https://todolist-frontend-tau.vercel.app/" target="_blank" rel="noopener noreferrer" >Project 2</a></li>
                <li><a className='anchor project' href="https://todolist-backend-six-woad.vercel.app/tasks/" target="_blank" rel="noopener noreferrer">Project 3</a></li>
            </ul>
        </div>
    );
};

export default Projects;