import React from 'react'
import './about.css'
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className='about' id='about'>
      <div className='top_section'>
        <h5>Get To Know</h5>
        <h2> About Me</h2>
      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <div className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Year Front-End Learning</small>
          </div>
          <div className='about_card'>
            <FiUser className='about_icon'/>
            <h5>Education</h5>
            <small>B.Sc. in Computer Science,Ain Shams University</small>
          </div>
          <div className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>5+ Completed Projects</small>
          </div>
        </div>
        <div className='about_text'>
        <p >I'm a Front-End Developer passionate about building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. I enjoy learning new technologies, solving problems, and creating clean, modern user interfaces.</p>
      <a href="#contact" className="btn btn-primary">
  Let's Talk
</a>
</div>
      </div>

    </section>
  )
}

export default About