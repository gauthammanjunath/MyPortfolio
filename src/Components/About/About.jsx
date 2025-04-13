import React from 'react'
import './About.css'
import star from '../../assets/star.png'
import profile_img from '../../assets/Myphoto3.png'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={star} alt="Logo" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Passionate about Full-Stack Development, SAP technologies...</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>•	Programming Language (C++, Java, JavaScript)</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>•	Databases (MongoDB , SQL, Cloud)</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>•	Design & Frontend: (HTML, CSS, Responsive Web Design, UX,UI)</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>•	Frameworks and Libraries (React.js, Redux, Node.js )</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>•	Tools (Visual Studio Code, GitHub, Figma)</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievments-section">
                <div className="about-achievments">
                    <h1>5+ </h1>
                    <p>Certifications & CoursesCompleted</p>
                </div>
                <hr />
                <div className="about-achievments">
                    <h1>6+ </h1>
                    <p>Personal & Academic Projects Built</p>
                </div>
                <hr />
            </div>
        </div>

    )
}

export default About