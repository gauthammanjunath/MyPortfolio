import React from 'react';
import './Projects.css';
import arrow from '../../assets/arrow.png';
import Projects_Data from '../../assets/projects_data';
import star from '../../assets/star.png'


const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
                <img src={star} alt="Logo" />
            </div>
            <div className="projects-container">
                {Projects_Data.map((project, index) => {
                    return (
                        <div key={index} className="projects-format">

                            <h3>{project.p_no}</h3>
                            <h2>{project.p_name}</h2>
                            <p>{project.p_desc}</p> {/* Corrected this line */}
                            <div className="projects-readmore">
                                <p>Go-to-project</p>
                                <a href="https://github.com/gauthammanjunath" target="_blank" rel="noopener noreferrer">
                                    <img src={arrow} alt="Arrow" />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
