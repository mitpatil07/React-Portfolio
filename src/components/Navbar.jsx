import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </div>
        <div className="nav-logo">
          <Link to="/" className="logo-container">
            <span className="logo-text">Portfolio</span>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
        <Link to="/projects" className="mobile-link" onClick={toggleMenu}>Projects</Link>
        <Link to="/about" className="mobile-link" onClick={toggleMenu}>About</Link>
        <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 