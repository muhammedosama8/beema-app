import React from 'react';
import logo from '../images/logo.png'
const Footer = () => {
    return (  
        <div className='footer'>
            <div className='container'>
                <div className='footer-logo'>
                    <img src={logo} alt={logo} />
                    <p>Just say the magical word</p>
                    <p>and we will do the rest</p>
                    <button>Start your Project</button>
                </div>
                <div className='footer-links'>
                    <button>Privacy Policy</button>
                    <button>Terms of Service</button>
                    <button>Contact</button>
                </div>
                <div className='copyRight'>
                    <p>&copy; 2022 All Rights for<a href='https://github.com/muhammedosama8' className='developer'>Muhammed Osama</a></p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;