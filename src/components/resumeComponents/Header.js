import React from 'react';

const Header = ({ name, phone, email, linkedin, github }) => {
  return (
    <div className="header">
      <h1>{name}</h1>
      <p>{phone?phone:""} | <a href={`mailto:${email?email:""}`}>{email?email:""}</a> | <a href={linkedin?linkedin:""}>LinkedIn</a> | <a href={github?github:github}>GitHub</a></p>
    </div>
  );
};

export default Header;
