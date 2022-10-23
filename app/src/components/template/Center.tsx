import React, {useState} from "react";
import "./Center.scss"
import AboutMe from './about/aboutMe'
import Experience from './experience/experience'
import Education from './aducation/aducation'
import Projects from './projects/projects'
import Project from './projects/projectInfo/project'

const Center = (props: any) =>{

    const [showProject, setShowProject] = useState(false)
    return (
        !showProject ? (<>
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
        </>) : (<>
            <Project
                setShowProject={setShowProject}
            />
        </>)
    )
}

export default Center


