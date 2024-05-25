import React from 'react';
import './PersonalInfo.css'; 
function PersonalInfo (props)
{
const { name, phoneNumber, gitHub, email, dob, Address } = props;

  return (
    <div className="resume">
      <header className="resume-header">
        <h1>{name || 'Your Name'}</h1>
        <p>
          {phoneNumber && <span>{phoneNumber} | </span>}
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {gitHub && <span> | <a href={gitHub}>{gitHub}</a></span>}
        </p>
      </header>
      <section className="resume-section">
      </section>
    </div>
  );
};
export default PersonalInfo