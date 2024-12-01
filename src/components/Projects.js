import React from "react";
import "../App.css";

const Projects = () => {
    const projectLinks = [
        { href: "https://tic-tac-toe-kohl-iota.vercel.app/", text: "Tic-Tac-Toe" },
        { href: "https://todolist-frontend-tau.vercel.app/", text: "To-Do List" },
        { href: "https://weather-app-danielwmartin1s-projects.vercel.app/", text: "Weather App" }
    ];

    return (
        <div className='container main project-div'>
            <h1>Portfolio</h1>
            <div className="project-link anchor project divProject">
                <a className='anchor project' href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                    My GitHub Repositories
                </a>
                <div className='project-link'>
                    {projectLinks.map((project, index) => (
                        <div>
                            <a key={index} className='anchor project' href={project.href} target="_blank" rel="noopener noreferrer">
                                {project.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Projects;