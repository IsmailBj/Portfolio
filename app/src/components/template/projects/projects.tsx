import React from "react"
import './projects.scss'
import ImgProject from '../../../assets/projects/img-holder.png'
import userData from '../../../data/userData.json'

const projects = (props: any) =>{
    const {projects} = userData
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

                <div className="project-box" onClick={()=> props.setShowProject(true)}>
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
                <div className="project-box">
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
                <div className="project-box">
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
                <div className="project-box">
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
                <div className="project-box">
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
                <div className="project-box">
                    <img src={ImgProject} alt="404" />
                    <div className="pro-title">Comming soon</div>
                </div>
            </div>
        </div>
    )
}


export default projects