import React from 'react';

const Education = ({ education }) => {
  console.log("dsfdfdrf",education)
  return (
    <section>
      <h2>Education</h2>
      { education?Object.keys(education).map((edu, index) => (
        <>
        {education[edu].institution?education[edu].institution.name?<div key={index} className="education-item">
           <div className="education-info">
              <div className="two-column-container">
                  <div className="left-column">
                    <h3>
                      {education[edu].institution?education[edu].institution.name?education[edu].institution.name:"":""} <span>{education[edu].institution?education[edu].institution.address?education[edu].institution.address.city?education[edu].institution.address.city:"":"":""},{education[edu].institution?education[edu].institution.address?education[edu].institution.address.state?education[edu].institution.address.state:"":"":""}</span>
                    </h3>
                    <p>{education[edu].board?education[edu].board:""}</p>
                  </div>
                  <div className="right-column">
                    <p className="dates">{education[edu].start?education[edu].start:""}    {education[edu].end?education[edu].end:""}</p>
                    <p className='marks'>{education[edu].marks?education[edu].marks!=0?education[edu].marks:"null":""}</p>
                  </div>
              </div>
           </div>
        </div>
        :"":""}
      </>
      
      )):""}
    </section>
  );
};

export default Education;
