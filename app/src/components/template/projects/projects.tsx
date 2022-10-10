import React from "react"
import './projects.scss'

const projects = () =>{

    return (
        <div className="projects-container">
            <div className="title">LATEST PROJECTS</div>
            <div className="project-filter">
                <span className="ctg all">All</span>
                <span className="ctg Web App-Development">Web App</span>
                <span className="ctg Web App-Marketing">Marketing</span>
                <span className="ctg Desktop-App">Desktop App</span>
                <span className="ctg Mobile-App">Mobile App</span>
            </div>
            <div className="projects-list">
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
            </div>
        </div>
    )
}


export default projects