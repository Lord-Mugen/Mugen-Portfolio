import React from 'react'
import './Footer.css';
import { Icon } from '@iconify/react';
import Logo from '../../assets/images/logo2.png';

const Footer = () => {
  const github = <Icon icon="akar-icons:github-fill"  className="footer-icon"/>;
  const linkedin = <Icon icon="akar-icons:linkedin-box-fill" className="footer-icon"/>;
  const up = <Icon icon="bi:arrow-up-circle-fill" className="footer-icon up"/>;
  return (
    <div>
        <footer className="footer">
            <div className="footer-logo-container">
              <img src={Logo} alt="logo-footer" className="footer-logo"/>
            </div>
            <div className="footer-link">
              <a href="https://github.com/Lord-Mugen" target="_blank">{github}</a>
              <a href="https://www.linkedin.com/in/christian-javier-ruiz-cort%C3%A9s/" target="_blank">{linkedin}</a>
            </div>
            <a href="#navbar">{up}</a>
        </footer>
    </div>
  )
}

export default Footer