import React from 'react'
import './projects.css'
import imgPortfolio from '../../assets/img1.jpeg'
import imgEcommerce from '../../assets/img2.jpeg'
import imgBank from '../../assets/img3.jpeg'
import imgCrud from '../../assets/img4.jpeg'

// Set `demo` to a link when a project has a live version; the button is hidden while it is empty.
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    image: imgEcommerce,
    github: 'https://github.com/SanaaAtif/Ecommerce-project',
    demo: '',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: imgPortfolio,
    github: 'https://github.com/SanaaAtif/portofolio',
    demo: 'https://sanaaatif.github.io/portofolio/',
  },
  {
    id: 3,
    title: 'CRUD App',
    image: imgCrud,
    github: 'https://github.com/SanaaAtif/crud-system',
    demo: '',
  },
  {
    id: 4,
    title: 'Bank Management System',
    image: imgBank,
    github: 'https://github.com/SanaaAtif/Bank-Management-app',
    demo: '',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>
      <div className="projects_container">
        {projects.map((project) => (
          <article className="project_item" key={project.id}>
            <div className="project_item_img">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <h3>{project.title}</h3>
            <div className="project_item_btns">
              <a href={project.github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              {project.demo && (
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
