import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackgroundNavBar = () => {
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundNavBar);

  return (
    <nav className={`navbar-background ${navBar ? 'background-nav' : ''}`}>
      <div className="navbar">
        <Link to="header" smooth={true} duration={1000}>
          <img alt="Logo" src={logo} />
        </Link>

        <ul class="navegacion">
          <li>
            <Link to="header" smooth={true} duration={1000}>
              Header
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              Features
            </Link>
          </li>
          <li>
            <Link to="offer" smooth={true} duration={1000}>
              Offer
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
