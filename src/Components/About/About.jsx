import React from 'react';
import './About.css';
import Aboutimage from '../../assets/images/aboutimage.svg';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-title-container">
        <h1 className="about-title"><span>About</span> me</h1>
      </div>
      <section className="about">
        
        <div className="about-me">
          <p className="about-me-description">
            I am a web developer with the ability to
            quickly adapt to any development
              environment, I am capable of performing
              very good teamwork, either leading or
                following, in order to provide solutions to
                problems.</p>
        </div>
        <div className="about-image-container"> {/* There was going to be an animation here but for now it wont. */}
          <img src={Aboutimage} alt="about-image" className="about-image"/>
        </div>
        <a href="/* link to the cv */"><button className="about-cv">Download cv</button></a>
        
      </section>
    </div>
  )
}

export default About