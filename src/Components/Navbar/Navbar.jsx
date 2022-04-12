import React from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react';
import Logo from '../../assets/images/logo2.png';



const Navbar = () => {
  /* ICONS */
  const openIcon = <Icon icon="gg:menu-right" className="open-icon"/>; 
  const closeIcon = <Icon icon="eva:close-fill" className="close-icon"/>;

  return (
    <div id="navbar">
      <nav className="navbar" id="navbar-header">

        <header className="navbar-header">
          <a href="#" className="brand-link">
            <img src={Logo} alt="logo" className="brand"/>
          </a>
          <a href="#navbar-header" className="navbar-menu-mobile open">
            {openIcon}
          </a>
          <a href="#" className="navbar-menu-mobile close">
            {closeIcon}
          </a>
        </header>

        <ul className="navbar-container">
          <li className="navbar-item">
            <a href="#hero" className="navbar-link navbar-link-active">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About me</a>
          </li>
          <li className="navbar-item">
            <a href="#stack" className="navbar-link">My stack</a>
          </li>
          <li className="navbar-item">
            <a href="#proyects" className="navbar-link">Proyects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className=" contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar