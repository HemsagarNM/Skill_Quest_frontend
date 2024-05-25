import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section>
      <h2>Experience</h2>
      {experience?experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className='experience-info'>
            <div className="two-column-container">
              <div className="left-column">
                <p><b>{exp.role?exp.role:""} | {exp.company?exp.company:""}</b></p>
                <ul>
                    <li>
                      <b>Description</b>
                        <ul>
                          {exp.project?exp.project.description?exp.project.description:"":""}
                        </ul>
                    </li>
                    <li>
                      <b>Technologies</b> - {exp.project?exp.project.technologies?exp.project.technologies.join(", "):"":""}
                    </li>
                </ul>
                
              </div>
              <div className="right-column">
              <p className="dates">{exp.start?exp.start:""}--{exp.end?exp.end:""}</p>
              </div>
            </div>
          </div>
          
        </div>
      )):""}
    </section>
  );
};

export default Experience;
