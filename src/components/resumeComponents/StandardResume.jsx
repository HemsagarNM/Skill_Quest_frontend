import React from 'react'
import Header from './Header'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import CodingPlatformLinks from './CodingPlatformLinks'

const StandardResume = ({res}) => {
  return (
    <div className="resume">
      <Header {...res.personalInfo} />
      <Education education={res.education} />
      <Experience experience={res.experience} />
      <Projects projects={res.projects} />
      <Skills skills={res.skills} />
      <CodingPlatformLinks cpl={res.codingPlatformLinks}/>
    </div>
  )
}

export default StandardResume
