import React, { useState } from 'react';
import './ProjectsSection.css'; // Assuming you add custom styles in this file
import { Link } from 'react-router-dom';
const ProjectsSection = ({ isDarkMode }) => {
  const projects = [
    { name: 'Project 1 ',id:1 , description: 'Our e-commerce web application is a sophisticated platform built using cutting-edge...', link: '#', image: 'src/assets/p11.png' },
    { name: 'Project 2 ',id:2 , description: 'Our travel agency website template is a stunning showcase of modern frontend design...', link: '#', image: 'src/assets/p21.png' },
    { name: 'Project 3 ',id:3 , description: 'Our portfolio webpage is a sophisticated and dynamic showcase of your work, designed with...', link: '#', image: 'src/assets/p31.png' },
    { name: 'Project 4 ',id:4 , description: 'Our portfolio webpage is a sleek and modern platform that stands out with its elegant dark...', link: '#', image: 'src/assets/p41.png' },
    { name: 'Project 5 ',id:5 , description: 'A template of kitchen decoration business, I can design any template with all poss...', link: '#', image: 'src/assets/p51.png' },
    { name: 'Project 6 ',id:6 , description: 'A clean and modern web application interface showcasing a user-friendly dashboard...', link: '#', image: 'src/assets/p61.png' },
    { name: 'Project 7 ',id:7 , description: 'This project showcases an interactive image carousel created using HTML, CSS, and JavaScript... ', link: '#', image: 'src/assets/p71.png' },
    { name: 'Project 8 ',id:8 , description: 'Our ReactJS project for employee management offers a comprehensive and intuitive solution...', link: '#', image: 'src/assets/p81.png' },
    { name: 'Project 9 ',id:9 , description: 'Our CCTV camera landing page offers a straightforward and effective presentation...', link: '#', image: 'src/assets/p91.png' },
    { name: 'Project 10',id:10, description: '', link: '#',image: 'src/assets/p111.png' },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = (num) => {
    
    setVisibleProjects((prev) => prev + num);
  };

  return (
    <section id='projects' className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pinterest-grid">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <Link to={`/project/${project.id}`} key={index} >
          <div
           
            className={`project-card bg-[var(--color-background)] shadow-lg rounded-lg p-4 transition-shadow duration-300 hover:shadow-2xl animate-move ${
              index % 2 === 0 ? 'animate-down' : 'animate-up'
            }`}
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-primary mb-4">{project.description}</p>
            <p
              className="text-accent font-bold underline hover:no-underline"
            >
              View Project
            </p>
          </div>
          </Link>
        ))}
      </div>
      
      {visibleProjects == projects.length ? (
        <div className="text-center mt-6">
          <button
            onClick={()=>{setVisibleProjects(6)}}
            className="bg-[var(--color-secondary)] text-[var(--color-background)] py-2 px-4 rounded hover:bg-[var(--color-accent)] transition-colors duration-300"
          >
            Show Less
          </button>
        </div>
      ): (<div className="text-center mt-6">
        <button
          onClick={()=>{setVisibleProjects(10)}}
          className="bg-[var(--color-secondary)] text-[var(--color-background)] py-2 px-4 rounded hover:bg-[var(--color-accent)] transition-colors duration-300"
        >
          Show More
        </button>
      </div>)}
    </section>
  );
};

export default ProjectsSection;
