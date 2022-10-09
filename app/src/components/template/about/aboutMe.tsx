import React from "react"
import "./aboutMe.scss"
import ReactTypingEffect from 'react-typing-effect';

 const aboutMe = () => {

    return (
        <div className="about-container">
            <div className="blur-cover">
                <div className="text-right"><span><ReactTypingEffect text={["Hello,", "Bonjour", "Hallo"]} /> My name is Ismail <br /> And Im Software developer</span></div>
                <div className="bar"></div>
                <div className="text-left">
                    <p className="About-bold">About Me</p>
                    <p className="about-text">Hi im Doing my Studies at IU International University of Applied Sciences, I completed Seavus academy and got the title full stack Web Development, I've dealt with many different types of technology throughout my life, I'm proficient at dealing with technical issues of all sorts, I have excellent communication skills, I work very well in groups,</p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe