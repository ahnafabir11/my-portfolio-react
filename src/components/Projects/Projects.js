import './Projects.css';
import React from 'react';
import projects from './projectApi.js';
import { FaRegEye } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'

const Projects = () => {
  console.log(projects);
  return (
    <div className="Projects">
      <div className="projects_container">
        {
          projects.map((project, idx) => 
            <div key={idx} className="single_projects">
              <div className="project_img_container">
                <img src={project.imgSrc} alt={project.name} className="project_img" />
                <div className="project_btn_container">
                  <a href={project.live} target="blank" className="project_btn">
                    <FaRegEye style={{ fontSize: '24px' }} /> Watch Live
                </a>
                  <a href={project.github} target="blank" className="project_btn">
                    <FaCode style={{ fontSize: '24px' }} /> Review Code
                </a>
                </div>
              </div>
              <div className="project_des">
                <h4 className="text-center text-white">{project.name}</h4>
                <h6 className="text-center" style={{ color: 'orange'}}>{project.language}</h6>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;