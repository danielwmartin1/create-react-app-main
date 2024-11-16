import React from "react";
import "../App.css";

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <p>This is the Projects component.</p>
            <a href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                Visit my GitHub repository
            </a>
            <ul>
                <li><a href="https://tic-tac-toe-kohl-iota.vercel.app/" target="_blank" rel="noopener noreferrer">Project 1</a></li>
                <li><a href="https://todolist-frontend-tau.vercel.app/" target="_blank" rel="noopener noreferrer">Project 2</a></li>
                <li><a href="https://todolist-backend-six-woad.vercel.app/tasks/" target="_blank" rel="noopener noreferrer">Project 3</a></li>
            </ul>
        </>
    );
};

export default Projects;