import React from 'react'
import "./About.css"
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
          role: 'Tech Lead,Project Designer',
          description: 'oversees the project dskfrfn erkfjerifj fdgijerfiwfdjwe  gjirgjrej g erigjerij giejrg ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpiUYtU_frWqFQeaChQz5UhROaCK0d0IpNqDpwMWu3A&s',
        },
        {
          name: 'Chethan A S',
          role: 'Front End Designer',
          description: 'Design front end',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpiUYtU_frWqFQeaChQz5UhROaCK0d0IpNqDpwMWu3A&s',
        },
        {
          name: 'Hrithik U',
          role: 'Front End Designer',
          description: 'Design front end rfgrig  roegk rigk rgokr gk reogk regkk ekr oergoreg ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpiUYtU_frWqFQeaChQz5UhROaCK0d0IpNqDpwMWu3A&s',
        },
        {
          name: 'Hemsagar N M',
          role: 'Full Stack Developer',
          description: '',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpiUYtU_frWqFQeaChQz5UhROaCK0d0IpNqDpwMWu3A&s',
        },
      ];
    
      return (

          <div className="profiles">
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
