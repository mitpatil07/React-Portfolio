import React from 'react';
import '../styles/Projects.css';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';                     


const Projects = () => {
  const projects = [
    {
      title: 'Travel Planner ',
      description: 'Travel Planner is a dynamic web application developed using Java Servlet and JSP technologies that enables users to plan, organize, and manage their travel itineraries with ease. The application provides a user-friendly interface for creating personalized travel plans, selecting destinations, setting travel dates, managing bookings, and exploring travel suggestions.',
      technologies: ['Servlet', 'JSP', 'Mysql'],
      image: project1Image,
      link: '#'
    },
    {
      title: 'Pet Precaution WebApp',
      description: 'Pet Precaution is a responsive web application that offers essential care tips and health guidelines for pet owners. It covers key topics like diseases, treatments, and daily care routines. The UI is clean, user-friendly, and visually engaging—designed with Bootstrap for a seamless experience across all devices.',
      technologies: ['Bootstap', 'JS', 'Mysql'],
      image: project2Image,
      link: '#'
    },
    {
      title: 'Customer Segmentation ML-Project',
      description: '"CustomerSegmentationML" likely involves applying various machine learning algorithms to segment customers based on their behaviors, preferences, and demographic data. Customer segmentation is crucial for businesses to personalize marketing strategies, improve customer satisfaction, and optimize resource allocation.',
      technologies: ['Python', 'Machine Learning', 'Data Visualization'],
      image: project3Image,
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {/* <a href={project.link} className="project-link">View Project</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 