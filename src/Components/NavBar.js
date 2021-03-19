import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [navBarMovil, setNavBarMovil] = useState(false);

  const changeNavBarMovil = () => {
    setNavBarMovil(!navBarMovil);
  };

  const changeBackgroundNavBar = () => {
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
      setNavBarMovil(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundNavBar);

  return (
    <nav
      className={`${
        navBarMovil
          ? 'navbar-background-menu background-nav'
          : 'navbar-background'
      } ${navBar ? 'background-nav' : ''}`}
    >
      <div className="navbar">
        <Link to="header" smooth={true} duration={1000}>
          <img alt="Logo" src={logo} />
        </Link>

        <div className="icon-bars">
          <FaBars onClick={changeNavBarMovil} />
        </div>

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
