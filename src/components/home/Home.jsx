import React from 'react'
import './home.css'
import Me from '../../assets/me.png'
import CV from '../../assets/Sanaa Atif Mohamed.pdf'
import HomeSocials from './HomeSocials'

function Home() {
  return (
    <header className="home" id="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Sanaa Atif</h1>
        <h4 className="text-light">Frontend Developer</h4>

        <div className="btns">
          <a href={CV} download="Sanaa Atif CV.pdf" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>

        <div className="me">
          <img src={Me} alt="Sanaa Atif" />
        </div>

        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
        <HomeSocials />
      </div>
    </header>
  )
}

export default Home
