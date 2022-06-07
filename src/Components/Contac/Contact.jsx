import React from 'react'
import './Contact.css';
import Card from '../Card/Card';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
       <h1>Get in touch</h1>
       <section>
         <div><Card/> </div>
         <div>form</div>
       </section>
    </div>
  )
}

export default Contact