import React from 'react';
import '../styles/About.css';
import bgImage from '../assets/bg-image.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="about-text">
            <p>
              <span>I am a passionate Software Engineer</span><br></br>I'm a passionate about crafting smooth, intuitive web and mobile experiences. With a blend of coding and design skills, I bring ideas to life through fast, functional, and visually engaging digital solutions. Whether it’s front-end, back-end, or UI/UX—I focus on building products that are both smart and seamless.</p>
            <p>I’m currently pursuing my Bachelor's degree in Computer Engineering at SNJB’s KBJ College of Engineering, Chandwad, where I’m constantly exploring new ways to push the boundaries of tech.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programing Language</h3>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JSP</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>PHP</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 