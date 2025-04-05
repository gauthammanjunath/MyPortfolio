import React from 'react'
import './Certifications.css'
import logo from '../../assets/infinity.png';
import Mycertifications_data from '../../assets/Mycertifications_data.js';
import star from '../../assets/star.png'
import arrow from '../../assets/arrow.png';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Certifications = () => {
    return (
        <div id='certifications' className='mycertifications' >
            <div className="mycertifications-title">
                <h1>My Certifications</h1>
                <img src={star} alt="Logo" />
            </div>
            <div className="mycertifications-slider">
                <Slide easing="ease" autoplay={true} duration={3000} indicators={true}>
                    {Mycertifications_data.map((cert, index) => (
                        <div key={index} className="mycertifications-slide">
                            <a href={cert.c_link} target="_blank" rel="noopener noreferrer">
                                <img src={cert.c_img} alt={`Certification ${index + 1}`} />
                            </a>
                        </div>
                    ))}
                </Slide>
            </div>
            <div className="mycertifications-showmore">
                <p>Show More</p>
                <img src={arrow} alt="Arrow" />
            </div>
        </div>
    )
}

export default Certifications;