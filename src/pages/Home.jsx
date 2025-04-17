import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
import bgImage from '../assets/bg-image.png';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Designer & Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timeout;
    const handleTyping = () => {
      if (!isDeleting && text === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      } else if (isDeleting && text === '') {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTypingSpeed(100);
        }, 1000);
      } else {
        setText(isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
        );
        timeout = setTimeout(handleTyping, typingSpeed);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, typingSpeed]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <section id="hero" className="landing-container">
        <div className="split-container">
          <div className="split designer">
            <div className="split-content">
              <h2>Designer</h2> 
              <p>Product designer specializing in UI design and design systems</p>
              <div className="skills-list">
                <span>UI/UX</span>
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Design Systems</span>
              </div>
            </div>
          </div>
          <div className="split coder">
            <div className="split-content">
              <h2>&lt;Coder/&gt;</h2>
              <p>Front end developer who writes clean, elegant and efficient code</p>
              <div className="skills-list">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML5/CSS3</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay content with profile image */}
        <div className="profile-overlay">
          <div className="profile-content">
            <div className="profile-text">
              <h1>Hi, I'm <span className="highlight">Mitesh Patil</span></h1>
              <h3 className="typing-text">{text}</h3>
              <div className="cta-buttons">
                <button className="primary-btn">Download CV</button>
                <button to="/contact" className="secondary-btn">Contact Me</button>
              </div>
            </div>
            <div className="profile-image">
              <div className="image-container">
                <img src={bgImage} alt="Profile" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
