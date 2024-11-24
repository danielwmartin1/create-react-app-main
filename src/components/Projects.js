import React from "react";
import "../App.css";

const Projects = () => {
    const projectLinks = [
        { href: "https://tic-tac-toe-kohl-iota.vercel.app/", text: "Tic-Tac-Toe" },
        { href: "https://todolist-frontend-tau.vercel.app/", text: "To-Do List" },
        { href: "https://weather-app-danielwmartin1s-projects.vercel.app/", text: "Weather App" }
    ];

    return (
        <div className='container main' style={{ border: '3px solid aqua', marginTop: '2rem', paddingBottom: '7rem'}}>
            <h1 style={{marginBottom: '3rem', color: 'var(--text-color)', fontSize: '1rem !important;'}} >Portfolio</h1>
            <button style={{margin: '2rem'}} className='anchor project' href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer">
                Check out my GitHub Repositories Page
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projectLinks.map((project, index) => (
                    <button key={index} className='anchor project' onClick={() => window.open(project.href, "_blank", "noopener noreferrer")}>
                        {project.text}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default Projects;