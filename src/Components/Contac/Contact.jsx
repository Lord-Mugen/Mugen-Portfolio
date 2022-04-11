import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-title-container">
            <h1 className="contact-title">Get In Touch</h1>
        </div>
       
        
        <section className="contact">
            <div className="contact-cards">
            
            </div>
            <div className="contact-form">
                <form action="" method="post" className="contact-form">
                    <ul>
                    <li>
                        <label for="name" className="contact-form-label">Name</label>
                        <input type="text" id="name" name="user_name" className="contact-form-input"/>
                    </li>
                    <li>
                        <label for="mail" className="contact-form-label">Email</label>
                        <input type="email" id="mail" name="user_mail" className="contact-form-input"/>
                    </li>
                    <li>
                        <label for="sub" className="contact-form-label">Subjec</label>
                        <input id="sub" name="user_subjec" className="contact-form-input"></input>
                    </li> 
                    <li>
                        <label for="msg" className="contact-form-label">Message</label>
                        <textarea id="msg" name="user_message" className="contact-form-input"></textarea>
                    </li>
                    </ul>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact