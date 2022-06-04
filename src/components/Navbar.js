import React, { useState } from 'react';
import logo from '../images/logo_croped.png'
import Login from './LoginModal';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const closeModal = () => setIsOpen(false)

    return (
        <div className='navbar container'>
            <div className='logo'>
                <img className='logo-image' src={logo} alt={logo}/>
                <p className='logo-text'>Beema</p>
            </div>
            <div className='nav-buttons'>
                <button className='get-start'>GetStart</button>
                <button 
                    onClick={() => setIsOpen(true)}
                    className='login'>
                    Login
                </button>
            </div>
            <Login isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
}
 
export default Navbar;