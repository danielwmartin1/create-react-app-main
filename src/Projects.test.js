import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from './components/Projects.js';

test('renders Portfolio heading', () => {
    render(<Projects />);
    const headingElement = screen.getByText(/Portfolio/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders GitHub Repositories link', () => {
    render(<Projects />);
    const githubLink = screen.getByText(/My GitHub Repositories/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/danielwmartin1?tab=repositories');
});

test('renders all project links', () => {
    render(<Projects />);
    const projectLinks = [
        "My First Website",
        "Tic-Tac-Toe",
        "Simon Says",
        "E-Commerce Frontend",
        "Calendar",
        "Weather App",
        "To-Do List"
    ];

    projectLinks.forEach(linkText => {
        const linkElement = screen.getByText(linkText);
        expect(linkElement).toBeInTheDocument();
    });
});