import React from 'react';
import '../App.css';
import './Contact.js';

function Form() {
  return (
    <div className="form-container">
      <form
        action="https://formspree.io/f/mrbgkbky"
        method="POST"
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
            style={{
              paddingTop: '1rem',
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
    </div>
  );
}

export default Form;