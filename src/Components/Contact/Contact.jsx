import React from 'react'
import './Contact.css'
import star from '../../assets/star.png'
import email from '../../assets/email.png'
import location from '../../assets/location-pin.png'
import call from '../../assets/call.png'
import linkedin from '../../assets/linkedin-sign.png'
import github from '../../assets/github.png'
const Contact = () => {
    return (
        <div id='contact' className='Contact'>
            <div className="Contact-title">
                <h1>Get In Touch</h1>
                <img src={star} alt="Logo" />
            </div>
            <div className="Contact-section">
                <div className="Contact-left">
                    <h1>Let's Connect</h1>
                    <p>
                        "I'm currently open to new projects and eager to collaborate! If you have something in mind, feel free to reach out. I'm always available to discuss opportunities and contribute my skills."
                    </p>
                    <div className="Contact-details">
                        <div className="Contact-detail">
                            <a href="mailto:gauthammanjunath35@gmail.com">
                                <img src={email} alt="Email" />
                            </a>
                            <p>gauthammanjunath35@gmail.com</p>
                        </div>
                        <div className="Contact-detail">
                            <img src={call} alt="Logo" />
                            <p>+49 1772476360</p>
                        </div>
                        <div className="Contact-detail">
                            <img src={location} alt="Logo" />
                            <p>Germany</p>
                        </div>
                        <div className='Contact-detail'>
                            <a href="https://github.com/gauthammanjunath" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt=" " /></a>
                            <p>GitHub</p>
                        </div>
                        <div className="Contact-detail">
                            <a href="https://www.linkedin.com/in/gautham-manjunath-831b92266/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="" /></a>
                            <p>Linkedin</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact