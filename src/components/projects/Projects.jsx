import React from 'react'
import './projects.css'
/*import img2 from '../../assets/img1.jpeg'
import img1 from '../../assets/img2.jpeg'
import img4 from '../../assets/img3.jpeg'
import img3 from '../../assets/img4.jpeg'*/
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    
    github: 'https://github.com/SanaaAtif/Ecommerce-project',
    demo: 'https://your-demo-link.com',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    
    github: 'https://github.com/your-username/portfolio',
    demo: 'https://your-demo-link.com',
  },
  {
    id: 3,
    title: 'Crud App',
    
    github: 'https://github.com/SanaaAtif/crud-system',
    demo: 'https://your-demo-link.com',
  },
  {
    id: 4,
    title: 'Bank Management System',
    
    github: 'https://github.com/SanaaAtif/Bank-Management-app',
    demo: 'https://your-demo-link.com',
  },
]
function Projects() {
  return (
    <section className='projects'>
      <div className='top_section'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>
       <div className='projects_container'>
        {projects.map((project) => (
          <article className='project_item' key={project.id}>
            <h3>{project.title}</h3>
            <div className='project_item_btns'>
              <a href={project.github} className='btn' target='_blank' rel='noreferrer'>
                Github
              </a>
              <a href={project.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects