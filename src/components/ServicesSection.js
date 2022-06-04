import React from 'react';
import service1  from '../images/web_development_.png';
import service2  from '../images/mobile_phone.png';
import service3  from '../images/bug_fixed.png';

const ServiceSection = () => {
    const ourService = [
        {
            title: 'Fully integrated services',
            description: 'We build and deliver fully integrated webapps with customized control panels that fit your compnay needs',
            imgUrl: service1
        },
        {
            title: 'Mobile optimized',
            description: 'We build and deliver fully integrated webapps with customized control panels that fit your compnay needs',
            imgUrl: service2
        },
        {
            title: 'Quality is our priority',
            description: 'We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company',
            imgUrl: service3
        },
    ]
    return ( 
        <div className='service-section container'>
            <h1 className='title'>Best Quality Software</h1>
            <div className='option '>
                {ourService.map((service, index) => (
                    <div key={index} className='service'>
                        <div className='service-div'>
                            <p className='service-title'>{service.title}</p>
                            <p className='service-description'>{service.description}</p>
                        </div>
                        <div className='service-img'>
                            <img src={service.imgUrl} alt={service.title}/>
                        </div>
                    </div>

                ))}
            </div>
        </div>
     );
}
 
export default ServiceSection;