import React from 'react'
import profile_img from '../../assets/Myphoto2.png'
import './Hero.css'

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Gautham Manjunath,</span> Intern Software developer based in Germany.</h1>
            <p>I have completed my Master’s Degree in Applied Computer Science at SRH Hochschule Heidelberg specailizing in Usability Engineering and UX Design. I am Passionate about Full-Stack Development, SAP technologies and committed to continious learning.</p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero