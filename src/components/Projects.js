import React from "react";
import "../App.css";

const Projects = () => {
    const projectLinks = [
        { href: "https://danielwmartin1.github.io/first-website/", text: "My First Website" },
        { href: "https://danielwmartin1.github.io/Tic-Tac-Toe/", text: "Tic-Tac-Toe" },
        { href: "https://simon-says-zeta-opal.vercel.app/", text: "Simon Says" },
        { href: "https://fake-store-sooty-nine.vercel.app/", text: "Fake Store" },
        { href: "https://danielwmartin1.github.io/weather-app/", text: "Weather App" },
        { href: "https://todolist-frontend-tau.vercel.app/", text: "To-Do List" }
    ];

    return (
        <div className='container main project-div'>
            <h1>Portfolio</h1>
            <div className="project-link anchor project divProject">
                <a className='anchor project' style={{textDecoration: 'underline', paddingBottom: '1rem'}} href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
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