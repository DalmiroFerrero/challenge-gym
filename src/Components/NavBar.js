import React, { useState, useEffect } from 'react';
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
        <img alt="Logo" src={logo} />

        <nav class="navegacion">
          <a href="/">Header</a>
          <a href="/">Features</a>
          <a href="/">Offer</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
