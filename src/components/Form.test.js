import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form.js';

describe('Form Component', () => {
    test('renders form correctly', () => {
        render(<Form />);
        expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Your message here')).toBeInTheDocument();
        expect(screen.getByText('Send')).toBeInTheDocument();
    });

    test('shows alert when fields are empty', () => {
        render(<Form />);
        window.alert = jest.fn();
        fireEvent.click(screen.getByText('Send'));
        expect(window.alert).toHaveBeenCalledWith('Please fill out both fields.');
    });

    test('submits form with valid data', async () => {
        render(<Form />);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                headers: { get: () => 'application/json' },
                json: () => Promise.resolve({ success: true })
            })
        );

        fireEvent.change(screen.getByPlaceholderText('you@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Your message here'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Send'));

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
            'https://formspree.io/f/mrbgkbky',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'test@example.com', message: 'Test message' })
            })
        ));
    });

    test('shows success popup on successful submission', async () => {
        render(<Form />);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                headers: { get: () => 'application/json' },
                json: () => Promise.resolve({ success: true })
            })
        );

        fireEvent.change(screen.getByPlaceholderText('you@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Your message here'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Send'));

        expect(await screen.findByText((content, element) => content.includes('Form submitted successfully!'))).toBeInTheDocument();
    });

    test('shows error popup on failed submission', async () => {
        render(<Form />);
        global.fetch = jest.fn(() => Promise.reject('API is down'));

        fireEvent.change(screen.getByPlaceholderText('you@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Your message here'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Send'));

        expect(await screen.findByText((content, element) => content.includes('There was an error submitting the form.'))).toBeInTheDocument();
    });
});