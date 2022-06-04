import React from 'react';
import Rocket from '../images/rocket_launch_.png'

const MoreAboutBeema = () => {
    return (
        <div className='container more-about'>
            <h1 className='about-title'>More About Beema</h1>
            <div className='about'>
                <p> Beema is about designing, building and deliverying best quality
                software for your company. {<br />}
                {<br />} We make sure that you get the best software inferstracture
                and set of applications to ensure the best experience of your clients.{" "}
                {<br />}
                {<br />} So wether you are handling thousands of payment transactions
                or you’re just starting out, you are in the right place.</p>
                <img src={Rocket} alt={Rocket} />
            </div>
        </div>
    );
}
 
export default MoreAboutBeema;