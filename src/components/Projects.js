import React from "react";
import "../App.css";

const Projects = () => {
    const projectLinks = [
        { href: "https://pro1construction.vercel.app/", text: "My First Website" },
        { href: "https://dwm-tictactoe.vercel.app/", text: "Tic-Tac-Toe" },
        { href: "https://dwm-simonsays.vercel.app/", text: "Simon Says" },
        { href: "https://acls-algorithm.vercel.app/", text: "ACLS Algorithm" },
        { href: "https://dwm-ecommerce.vercel.app/", text: "E-Commerce Frontend" },
        { href: "https://dwm-weatherapp.vercel.app/", text: "Weather App" },
        { href: "https://dwm-todolist.vercel.app/", text: "To-Do List" },
        { href: "https://dwm-todolist-api.vercel.app/", text: "To-Do List API" },
    ];

    return (
        <div className='container main project-div'>
            <div className="portfolio-container">
                <h1 className="portfolio">Portfolio</h1>
                <div
                    key="project-link" 
                    className="project-link anchor project divProject">
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
        </div>
    )
};

export default Projects;