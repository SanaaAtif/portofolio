import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import CV from "../../assets/CV.pdf";
import HomeSocials from "./HomeSocials";
function Home() {
  return (
    <div className="container home_container">
      <h4>Hello I'm</h4>
      <h1>Sanaa Atif</h1>
      <h4 className="text-light">Frontend Developer</h4>

      <div className="btns">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#" className="btn btn-primary">
          let's talk
        </a>
      </div>
      <div className="me">
        <img src={Me} alt="Me" />
       
      </div>


<a href="#contact" className="scroll_down">
  Scroll Down
</a>
      <HomeSocials/>
    </div>
    
  );
}

export default Home;
