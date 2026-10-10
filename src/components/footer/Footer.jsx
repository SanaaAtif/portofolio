import React from 'react'
import './footer.css'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer_logo">Sanaa Atif</a>

      <ul className="footer_links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/sanaa-atif569" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/SanaaAtif" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.facebook.com/sanaa.atif.754" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
      </div>

      <small className="footer_copyright">
        &copy; {new Date().getFullYear()} Sanaa Atif. All rights reserved.
      </small>
    </footer>
  )
}

export default Footer
