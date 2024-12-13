import React, { useState, useEffect } from 'react';
import '../App.css';
import '../buttons.css';

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('Form component mounted');
        return () => console.log('Form component unmounted');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !message) {
            alert('Please fill out both fields.');
            return;
        }

        fetch('https://formspree.io/f/mrbgkbky', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message })
        })
        .then(response => response.headers.get('content-type')?.includes('application/json') ? response.json() : Promise.reject('Unexpected content type'))
        .then(data => {
            console.log('Success:', data);
            showPopup('Form submitted successfully!', 'rgba(0, 255, 0, 0.5)');
            setEmail('');
            setMessage('');
        })
        .catch(error => {
            console.error('Error:', error);
            showPopup('There was an error submitting the form.', 'rgba(255, 0, 0, 0.5)');
        });
        console.log('Form submitted with:', { email, message });
    };

    const showPopup = (message, bgColor) => {
        const popup = document.createElement('div');
        Object.assign(popup.style, {
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: bgColor, color: 'white', padding: '30px', borderRadius: '6px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', fontSize: '18px'
        });
        popup.innerText = message;
        document.body.appendChild(popup);
        setTimeout(() => document.body.removeChild(popup), 3000);
    };

    const labelStyle = {
        display: 'flex', flexDirection: 'column', fontWeight: 'bold', fontSize: '1.2rem',
        color: 'white', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '60%'
    };

    const inputStyle = {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '12px',
        border: '2px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', marginTop: '6px',
        marginBottom: '16px', resize: 'vertical', fontSize: '14px', fontFamily: 'Arial, sans-serif', color: 'black', textAlign: 'center'
    };

    const textareaStyle = { ...inputStyle, paddingTop: '1rem' };

    return (
        <div className="form-container">
            <form
                action="https://formspree.io/f/mrbgkbky"
                method="POST"
                onSubmit={handleSubmit}
                style={{
                    textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', fontFamily: 'Arial, sans-serif', width: '60%', backgroundColor: 'var(--background-color)',
                    padding: '2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', border: '2px solid var(--primary-color)'
                }}
            >
                <label style={labelStyle}>
                    Your email:
                    <input
                        type="email"
                        name="email"
                        required
                        title="Enter your email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Your message:
                    <textarea
                        name="message"
                        required
                        title="Enter your message"
                        placeholder="Your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={textareaStyle}
                    ></textarea>
                </label>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <button className="submit-button" type="submit">Send</button>
                </div>
            </form>
            <section style={{ color: 'white', display: 'flex', flexDirection: 'column', padding: '3rem' }}>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', paddingTop: '1.5rem' }}>
                    Please feel free to contact me with any questions or feedback. I will get back to you as soon as possible.
                </p>
            </section>
        </div>
    );
}

export default Form;
