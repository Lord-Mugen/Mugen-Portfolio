import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
        <nav className="navbar">
          <div className="logo-container">
            <h2>Logo</h2>
          </div>

          <div className="navbar-link-container">
              <a className="navbar-link" href="#">Home</a>
              <a className="navbar-link" href="#">About Me</a>
              <a className="navbar-link" href="#">My Stack</a>
              <a className="navbar-link" href="#">Proyects</a>
              <a className="navbar-link contact" href="#">Contact</a>
          </div>
          <button className="nav-mobile-icon">
            {isMobile ?}
          </button>
        </nav>
    </div>
  )
}

export default Navbar