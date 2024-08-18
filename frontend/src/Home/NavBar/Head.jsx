import React from 'react';
import './Head.css';

const Head = () => {
  return (
    <header className="header">
      <img src='/images/website1.png' alt="Chennai Logo" className="header-logo" />
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src='/images/twitter.png' alt="Twitter" className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src='/images/facebook.png' alt="Facebook" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src='/images/insta.png' alt="Instagram" className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src='/images/Linkedin.png' alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </header>
  );
};

export default Head;
