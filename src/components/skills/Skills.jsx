import React from 'react'
import './skills.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa'
import { SiTailwindcss,SiPostman } from 'react-icons/si'
const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Beginner' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Intermediate' },
  { name: 'GitHub', icon: <FaGithub />, level: 'Intermediate' },
  { name: 'Figma', icon: <FaFigma />, level: 'Beginner' },
  { name: 'Postman', icon: <SiPostman />, level: 'Beginner' },
]
function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className='top_section'>
        <h5>What skills I have</h5>
        <h2>My Skills</h2>
      </div>
      <div className='skills_container'>
        {skills.map((skill) => (
          <div className='skill_card' key={skill.name}>
            <div className='skill_icon'>{skill.icon}</div>
            <h5>{skill.name}</h5>
            <small>{skill.level}</small>
          </div>
        ))}
      </div>
      
  
    </section>
  )
}

export default Skills