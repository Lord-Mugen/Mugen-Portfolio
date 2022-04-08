import React from 'react'
import './Hero.css';
import perfil from '../../assets/images/perfil.jpeg';

const Hero = () => {
  const name = "Christian";


  return (
    <div>
      <section className="hero">
        <div className="hero-image-container">
          <img src={perfil} alt="portrait-image" className="portrait-image"/>
        </div>
        <div className="hero-h1-container">
          <h1 className="hero-h1">I'm {name}</h1>
          <h3 className="hero-h3">Full-Stack Web Developer</h3>
        </div>
      </section>
    </div>
  )
}

export default Hero