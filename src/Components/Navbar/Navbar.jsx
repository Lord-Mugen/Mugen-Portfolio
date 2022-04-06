import React from 'react';
import './Navbar.css';


const Navbar = () => {
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
          </div>
        </nav>

    </div>
  )
}

export default Navbar