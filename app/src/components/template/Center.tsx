import React from "react";
import "./Center.scss"
import AboutMe from './about/aboutMe'
import Experience from './experience/experience'

const Center = (props: any) =>{
    return (
        <div className="center-container">
            <div className="banner-top"><AboutMe/></div>
            <div className="experience">
                <Experience/>
            </div>
        </div>
    )
}

export default Center