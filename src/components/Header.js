import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';

const Header = () => {
    return ( 
        <div className='header'>
            <Navbar />
            <div className='header-section'>
                <img className='header-img' src={logo} alt={logo} />
                <p className='header-text'>Software Development From the Best in the Industry</p>
                <button className='start'>Start your Project</button>
            </div>
            <div>
            </div>
        </div>
    );
}
 
export default Header;

