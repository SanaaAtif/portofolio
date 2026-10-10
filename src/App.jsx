import { useState } from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  {/*
    <Nav/>
    <About/>
    
    
    
    <Footer/>*/}
      </>
  )
}

export default App
