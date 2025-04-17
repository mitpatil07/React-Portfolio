import React, { useState } from 'react';
import '../styles/Contact.css';
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Email</h3>
              <p>mitesh8767@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 8767058358</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Chandwad, Nashik-425108</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/mitpatil07" className="social-link">
                <img src={githubIcon} alt="GitHub" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mitpatil07/" className="social-link">
                <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/mitpatil_07/" className="social-link">
                <img src={instagramIcon} alt="Instagram" /> Instagram
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
