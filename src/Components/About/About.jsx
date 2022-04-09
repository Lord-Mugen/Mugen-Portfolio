import React from 'react';
import Animation from '../Animation/Animation';
import './About.css';

const About = () => {
  return (
    <div>
      <section className="about">
        <h1 className="about-title">About me</h1>
        
        <div className="about-me">
          <p className="about-me-description">
            I am a web developer with the ability to
            quickly adapt to any development
              environment, I am capable of performing
              very good teamwork, either leading or
                following, in order to provide solutions to
                problems.</p>
          
          <p className="about-me-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum architecto itaque consequatur voluptate autem quaerat ad, natus eius voluptas ipsa earum quidem reiciendis nulla velit perferendis temporibus in delectus.</p>
          <p className="about-me-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum architecto itaque consequatur voluptate autem quaerat ad, natus eius voluptas ipsa earum quidem reiciendis nulla velit perferendis temporibus in delectus.</p>
        </div>
        <div className="about-animation">
          <Animation/>
        </div>
      </section>
    </div>
  )
}

export default About