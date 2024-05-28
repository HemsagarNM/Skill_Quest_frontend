import React from 'react'
import "./About.css"
import chethimg from "../../src/assets/Chethan_photo.jpg"
import navimg from "../../src/assets/naveen_pic.jpg"
import hritimg from "../../src/assets/Hrithik_pic.jpeg"
import hemimg from "../../src/assets/hemimg.jpeg"
import { useEffect, useNavigate } from 'react'

const ProfileCard = ({ name, role, description, imageUrl, linkedinURL }) => {
  return (
    
    <div className="profile-card">
      <a href={linkedinURL} > 
      <div className="profile-header">
        <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        
        <div className="profile-info">
        <div className='LinkedInUrl'>
          <h3> {name} </h3>
          </div>
          <h4>{role}</h4>
        </div>
        <div className="profile-description">
                {description}
                
                
                
            </div>
            
      </div>
      </a>
    </div> 
  );
};
const About = () => {
    const profiles = [
        {
          name: 'A Naveen',
          role: 'Team Lead, Project Designer',
          description: 'Oversees the project and developing backend ',
          imageUrl: navimg,
          linkedinURL: 'https://www.linkedin.com/in/hizinberg',
        },
        {
          name: 'Chethan A S',
          role: 'Front End Designer, Project Designer',
          description: 'Design front end and overseeing the integration of the project',
          imageUrl: chethimg,
          linkedinURL: 'https://www.linkedin.com/in/chethan-a-s',
        },
        {
          name: 'Hrithik U',
          role: 'Front End Designer',
          description: 'Design front end and integrating LLM ',
          imageUrl: hritimg,
          linkedinURL: 'https://www.linkedin.com/in/hrithikshet',
        },
        {
          name: 'Hemsagar N M',
          role: 'Full Stack Developer',
          description: 'Design Front End and integrating API calls to backend',
          imageUrl: hemimg,
          linkedinURL: 'https://www.linkedin.com/in/hemsagarnm',
        },
      ];
    
      return (


          <div className="profiles main-content">
            <h2 style={{color: 'white'}}>Meet Our Team</h2>
            <br></br>
            <div className="profile-cards">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  role={profile.role}
                  description={profile.description}
                  imageUrl={profile.imageUrl}
                  linkedinURL={profile.linkedinURL}
                />
      
              ))}
            </div>
          </div>
      );
}

export default About
