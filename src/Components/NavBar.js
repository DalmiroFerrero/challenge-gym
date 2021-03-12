import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img alt='Logo' src={logo}/>

            <nav class="navegacion">
                <a href="#">Header</a>
                <a href="#">Features</a>
                <a href="#">Offer</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}

export default NavBar
