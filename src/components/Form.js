import React, { useState, useEffect } from 'react';
import '../App.css';
import '../buttons.css';

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
        .then(response => {
            if (response.headers.get('content-type')?.includes('application/json')) {
                return response.json();
            } else {
                throw new Error('Unexpected content type');
            }
        })
        .then(data => {
            console.log('Success:', data);
            // Display a pop-up message
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.backgroundColor = 'green';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.backgroundColor = 'red';
            popup.style.color = 'white';
            popup.style.padding = '30px'; // Increased padding for larger size
            popup.style.borderRadius = '6px';
            popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            popup.style.fontSize = '18px'; // Increased font size
            popup.innerText = 'Form submitted successfully!';
            document.body.appendChild(popup);

            // Remove the pop-up after 3 seconds
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 3000);
            // Reset form fields
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
                        // Display a pop-up message
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.backgroundColor = 'red';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.backgroundColor = '#4CAF50';
            popup.style.color = 'white';
            popup.style.padding = '30px'; // Increased padding for larger size
            popup.style.borderRadius = '6px';
            popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            popup.style.fontSize = '18px'; // Increased font size
            popup.innerText = 'There was an error submitting the form.';
            document.body.appendChild(popup);
        });
        console.log('Form submitted with:', { email, message });
    };

    const labelStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    const inputStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginTop: '6px',
        marginBottom: '16px',
        resize: 'vertical',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        textAlign: 'center'

    };

    const textareaStyle = {
        ...inputStyle,
        textAlign: 'center',
    };

    return (
        <div className="form-container">
            <form
                action="https://formspree.io/f/mrbgkbky"
                method="POST"
                onSubmit={handleSubmit}
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Arial, sans-serif',
                    margin: '7rem auto',
                    width: '50%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px'
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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    <button
                        className="submit-button"
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
                <p style={{textAlign: 'center', fontSize: '1.1rem', paddingTop: '1.5rem' }}>Please feel free to contact me with any questions or feedback. I will get back to you as soon as possible.</p>
            </section>
        </div>
    );
}

export default Form;
