import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div className="navbar-menu">
              <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
           <Link className="navbar-item" to="/solutions">Solutions</Link>
           <Link className="navbar-item" to="/about">About</Link>
           <Link className="navbar-item" to="/community">Community</Link>
           <Link className="navbar-item" to="/contact">Contact</Link>
          </div>
          </div>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
