import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section>
      <h2>Technical Skills</h2>
      <ul>
        <strong> {skills?skills.join(', '):""}</strong> 
      </ul>
    </section>
  );
};

export default Skills;
