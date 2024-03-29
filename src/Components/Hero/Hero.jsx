import React from 'react'
import './Hero.css';
import perfil from '../../assets/images/profile2.jpg';

const Hero = () => {

  return (
    <div id="hero">
      <section className="hero">
        <div className="hero-image-container">
          <img src={perfil} alt="portrait-image" className="portrait-image"/>
        </div>
        <div className="hero-text-container">
          <h1 className="hero-h1" translate='no'>I'm <span className="hero-name" translate='no'>Christian</span></h1>
          <h3 className="hero-h3" translate='no'>Full-Stack Web Developer</h3>
        </div>
      </section>
    </div>
  )
}

export default Hero