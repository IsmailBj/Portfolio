import React from "react";
import "./Center.scss"
import AboutMe from './about/aboutMe'
import Experience from './experience/experience'
import Education from './aducation/aducation'
import Projects from './projects/projects'

const Center = (props: any) =>{
    return (
        <div className="center-container">
            <div className="banner-top">
                <AboutMe/>
            </div>
            <div className="experience">
                <Experience/>
            </div>
            <div className="education">
                <Education/>
            </div>
            <div className="projects">
                <Projects/>
            </div>
        </div>
    )
}

export default Center