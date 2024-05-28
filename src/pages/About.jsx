import React from 'react'
import "./About.css"
import chethimg from "../../src/assets/Chethan_photo.jpg"
import navimg from "../../src/assets/naveen_pic.jpg"
import hritimg from "../../src/assets/Hrithik_pic.jpeg"
import hemimg from "../../src/assets/hemsagar_pic.jpg"

const ProfileCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        <div className="profile-info">
          <h3>{name}</h3>
          <h4>{role}</h4>
            
        </div>
        <div className="profile-description">
                {description}
            </div>
      </div>
      
    </div>
  );
};
const About = () => {
    const profiles = [
        {
          name: 'A Naveen',
          role: 'Team Lead,Project Designer',
          description: 'oversees the project and developing backend algorithm ',
          imageUrl: navimg,
        },
        {
          name: 'Chethan A S',
          role: 'Front End Designer, Project Designer',
          description: 'Design front end and overseeing the integration of the project',
          imageUrl: chethimg,
        },
        {
          name: 'Hrithik U',
          role: 'Front End Designer',
          description: 'Design front end and integrating LLM ',
          imageUrl: hritimg,
        },
        {
          name: 'Hemsagar N M',
          role: 'Front End Designer ',
          description: 'Design Front End and integrating API calls to backend',
          imageUrl: hemimg,
        },
      ];
    
      return (


          <div className="profiles main-content">
            <h2>Meet Our Team</h2>
            <br></br>
            <div className="profile-cards">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  role={profile.role}
                  description={profile.description}
                  imageUrl={profile.imageUrl}
                />
              ))}
            </div>
          </div>
      );
}

export default About
