import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header>
            <div className='background'>
                <NavBar />

                <div className='info'>
                    <h2>Step up your</h2>
                    <h1><span>Fitness</span> with us</h1>
                    <h3>Build your body and fitness with professional touch</h3>
                    <input type='button' value='Join Us' />
                </div>
            </div>
        </header>
    )
}

export default Header
