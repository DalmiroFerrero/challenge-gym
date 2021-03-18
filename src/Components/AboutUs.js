import React from 'react';
import image from '../assets/about.png';

const AboutUs = () => {
    return (
        <div id="about" className='about-us'>
            <div className='info-about-us'>
                <img src={image} alt='Image About Us'/>
                <div className='text-about-us'>
                    <h1>learn more about us</h1>
                    <p>Donec dapibus non risus id aliquam. Sed feugiat malesuada turpis porttitor condimentum. Cras gravida justo ut justo gravida, vel luctus ex scelerisque.</p>
                    <input type='button' value='Read more' className='btn' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
