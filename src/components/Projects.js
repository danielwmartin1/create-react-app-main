import React from "react";
import "../App.css";

const Projects = () => {
    const projectLinks = [
        { href: "https://tic-tac-toe-kohl-iota.vercel.app/", text: "Project 1" },
        { href: "https://todolist-frontend-tau.vercel.app/", text: "Project 2" },
        { href: "https://todolist-backend-six-woad.vercel.app/tasks/", text: "Project 3" },
        { href: "https://weather-app-danielwmartin1s-projects.vercel.app/", text: "Project 4" }
    ];

    return (
            <div className='container main' style={{ border: '3px solid aqua', marginTop: '2rem', paddingBottom: '7rem'}}>
                <h1 style={{marginBottom: '3rem', color: 'var(--text-color)'}} >Portfolio</h1>
                <a style={{margin: '2rem'}} className='anchor project' href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Check out my GitHub Repositories Page
                </a>
                <ul style={{ listStyleType: 'none' }}>
                    {projectLinks.map((project, index) => (
                        <li key={index}>
                            <a className='anchor project' href={project.href} target="_blank" rel="noopener noreferrer">
                                {project.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    )
};

export default Projects;