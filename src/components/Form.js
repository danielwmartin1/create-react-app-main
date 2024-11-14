import React, { useState, useEffect } from 'react';
import '../App.css';
// eslint-disable-next-line
// import Contact from './Contact';

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('Form component mounted');
        return () => {
            console.log('Form component unmounted');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !message) {
            alert('Please fill out both fields.');
            return;
        }

        // You can add additional logic here, such as sending the form data to an API or performing validation
        fetch('https://formspree.io/f/mrbgkbky', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
        // Reset form fields
        setEmail('');
        setMessage('');
        console.log('Form submitted with:', { email, message });
    };

    return (
        <div className="form-container">
            <form
                action="https://formspree.io/f/mrbgkbky"
                method="POST"
                target="_blank"
                onSubmit={handleSubmit}
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Arial, sans-serif',
                    margin: '50px auto',
                    width: '50%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px'
                }}
            >
                <label
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '10px',
                        fontWeight: 'bold'
                    }}
                >
                    Your email:
                    <input
                        type="email"
                        name="email"
                        required
                        title="Enter your email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            marginTop: '6px',
                            marginBottom: '16px',
                            resize: 'vertical',
                            textAlign: 'center'
                        }}
                    />
                </label>
                <label
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '10px',
                        fontWeight: 'bold'
                    }}
                >
                    Your message:
                    <textarea
                        name="message"
                        required
                        title="Enter your message"
                        placeholder="Your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box',
                            marginTop: '6px',
                            marginBottom: '16px',
                            resize: 'vertical',
                            textAlign: 'center',
                            fontSize: '14px',
                            fontFamily: 'Arial, sans-serif'
                        }}
                    ></textarea>
                </label>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            width: '40%',
                            textAlign: 'center',
                            color: 'white',
                            padding: '12px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            margin: '0.5rem'
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
                    >
                        Send
                    </button>
                </div>
            </form>
            <section style={{ color: 'white', display: 'flex', flexDirection: 'column', padding: '3rem'}}>
                <h2 style={{ textAlign: 'center' }}>Contact Info</h2>
                <a 
                    href="mailto:danielwmartin1@gmail.com" 
                    style={{ color: 'aqua', textAlign: 'center', }}
                    onMouseOver={(e) => (e.target.style.color = 'teal')}
                    onMouseOut={(e) => (e.target.style.color = 'aqua')}
                    onMouseDown={(e) => (e.target.style.color = 'lightgreen')}
                    onMouseUp={(e) => (e.target.style.color = 'lightblue')}
                >
                    danielwmartin1@gmail.com
                </a>
                <p style={{textAlign: 'center', fontSize: '1.1rem', paddingTop: '1.5rem' }}>Please feel free to contact me with any questions or feedback. I will get back to you as soon as possible.</p>
            </section>
        </div>
    );
}

export default Form;