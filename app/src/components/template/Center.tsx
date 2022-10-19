import React, {useState,useEffect} from "react";
import "./Center.scss"
import AboutMe from './about/aboutMe'
import Experience from './experience/experience'
import Education from './aducation/aducation'
import Projects from './projects/projects'
import { opneProject } from "../functions/openProject";

const Center = (props: any) =>{

    const [showProject, setShowProject] = useState(false)

    useEffect(()=>{
        console.log(showProject)
    },[showProject])

    return (
        <div className="center-container">
            <div className="banner-top">
                <AboutMe/>
            </div>
            <div className="projects">
                <Projects
                    setShowProject={setShowProject}
                />
            </div>
            <div className="experience">
                <Experience/>
            </div>
            <div className="education">
                <Education/>
            </div>
        </div>
    )
}

export default Center