import React from 'react';

const Projects = ({ projects }) => {
  console.log(projects)
  return (
    <section>
      <h2>Projects</h2>
      {projects?projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-info">
            <div className='two-column-container'>
              <div className="left-column">
                  <h3>{project.name?project.name:""}</h3>
                  <ul>
                    <li>
                      <b>Description</b>
                        <ul>
                          {project.description?project.description:""}
                        </ul>
                    </li>
                    <li>
                      <b>Technologies</b> - {project.technologies?project.technologies.join(", "):""}
                    </li>
                  </ul>
              </div>
              <div className="right-column">
              </div>
            </div>
          </div>
        </div>
      )):""}
    </section>
  );
};

export default Projects;
