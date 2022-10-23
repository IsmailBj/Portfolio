import { useState } from 'react'
import './project.scss'
import {faMobilePhone,faTablet, faDesktop} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import userData from '../../../../data/userData.json'
import { openURL } from '../../../functions/openURL'
import {displayimg} from '../../../functions/displayimg'
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";



const Project = (props: any) =>{
    const {projects} = userData
    const {Bflow} = projects
    const [deviceMode, setDeviceMode] = useState('desktop')

    return (
        <div className="project-container">
            <div className="info-container">
                <div className="close-container" onClick={()=> props.setShowProject(false)}>X</div>
                <div className="project-title">
                    <div className="title">{Bflow.title}</div>
                    <div className="category-container">
                        <span className='category'>Category - </span>
                        <span className='category-name'> {Bflow.categori} </span>
                    </div>
                </div>
                <div className='divider'></div>
                <div className="project-info">
                    <div className="project-about">
                        <div className="about">Project Brief:</div>
                        <div className="about-text">{Bflow.about}</div>
                    </div>
                    <div className="project-info-details">
                        <div className="project-info-text">Project Info</div>
                        <div className="sub-info">
                            <div className="date sub"><span>Date - </span> {Bflow.date}</div>
                            <div className="client sub"><span>Client - </span> xyz</div>
                            <div className="tools sub"><span>Tools - </span> {Bflow.tools.map(tool => tool+' ')}</div>
                            <div className="path sub"><span>Github - </span><span className='url' onClick={()=>openURL(Bflow.github,'_blank')}> Github.com </span></div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
            </div>
            <div className='divider'></div>
            <div className="project-view">
                <div className="device-container">
                    <div className="device-list">
                        <div className="desktop-device device" onClick={()=>setDeviceMode('desktop')}><FontAwesomeIcon icon={faDesktop}/></div>
                        <div className="tablet-device device" onClick={()=>setDeviceMode('tablet')}><FontAwesomeIcon icon={faTablet}/></div>
                        <div className="mobile-device device" onClick={()=>setDeviceMode('mobile')}><FontAwesomeIcon icon={faMobilePhone}/></div>
                    </div>
                </div>
               
                <div className={`img-container ${deviceMode}`}>
                    <div className='left'><FontAwesomeIcon icon={faArrowLeft}/></div>
                    <img src={displayimg(Bflow.title,deviceMode,4)} alt="" />
                    <div className='right'><FontAwesomeIcon icon={faArrowRight}/></div>
                </div>
            </div>
        </div>
    )
}


export default Project