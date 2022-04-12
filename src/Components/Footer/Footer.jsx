import React from 'react'
import './Footer.css';
import { Icon } from '@iconify/react';
import Logo from '../../assets/images/logo2.png';

const Footer = () => {
  const github = <Icon icon="akar-icons:github-fill"  className="footer-icon"/>;
  const linkedin = <Icon icon="akar-icons:linkedin-box-fill" className="footer-icon"/>;
  return (
    <div>
        <footer className="footer">
            <div className="footer-logo-container">
              <img src={Logo} alt="logo-footer" className="footer-logo"/>
            </div>
            <div className="footer-link">
              {github}
              {linkedin}
            </div>
        </footer>
    </div>
  )
}

export default Footer