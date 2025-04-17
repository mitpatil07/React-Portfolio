import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>YourName</h2>
          <p>Building the web, one line at a time.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:youremail@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
