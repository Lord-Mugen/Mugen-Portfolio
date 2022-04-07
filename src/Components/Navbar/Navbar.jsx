import React from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react';


const Navbar = () => {
  const openIcon = <Icon icon="gg:menu-right" className="open-icon"/>; 
  const closeIcon = <Icon icon="eva:close-fill" className="close-icon"/>;
  const logoIcon = <Icon icon="vscode-icons:file-type-htmlhint" />;

  return (
    <div>
      <nav className="navbar" id="navbar-header">

        <header className="navbar-header">
          <a href="#" className="brand-link">
            {logoIcon}
            <span className="brand">Logo</span>
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
            <a href="" className="navbar-link navbar-link-active">Home</a>
          </li>
          <li className="navbar-item">
            <a href="" className="navbar-link">About me</a>
          </li>
          <li className="navbar-item">
            <a href="" className="navbar-link">My stack</a>
          </li>
          <li className="navbar-item">
            <a href="" className="navbar-link">Proyects</a>
          </li>
          <li className="navbar-item">
            <a href="" className="navbar-link contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar