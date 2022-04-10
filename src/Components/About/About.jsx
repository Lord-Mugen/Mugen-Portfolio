import React from 'react';
import './About.css';
import Aboutimage from '../../assets/images/aboutimage.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title-container">
        <h1 className="about-title">About me</h1>
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
      </section>
    </div>
  )
}

export default About