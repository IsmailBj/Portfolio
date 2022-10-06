import './sidebar.scss'
import React from "react";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Avatar from '../../assets/img/userAvatar.png'


const Sidebar = (props: any) =>{
    return (
    <div className="sidebar-container">
        <div className="avatar-container">
            <div className="avatar">
               <img src={Avatar} alt="" />
            </div>
            <div className='info-user'>
                <span className='name-surname'>Ismail Bajrami 
                <span className='linkedIn'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </span>
                </span>
                <span className="work-title">Front-End Developer</span>
            </div>
        </div>
        <div className="info-contianer">
            <div className="info-location">
                <div className='residence'>
                    <span className='info'>Residence:</span>
                    <span className='data'>North Macedonia</span>
                </div>
                <div className='city'>
                    <span className='info'>City:</span>
                    <span className='data'>Skopje</span>
                </div>
                <div className='age'>
                    <span className='info'>Age:</span>
                    <span className='data'>22</span>
                </div>
            </div>
                <div className='divider'></div>
                <div className="lang-container">
                    <div className='lang-en lang'><b>English</b>100%</div>
                    <div className='lang-alb lang'><b>Albanian</b>100%</div>
                    <div className='lang-mkd lang'><b>Macedonian</b>70%</div>
                </div>
                <div className='divider'></div>
                <div className="skills-container">
                    <div className="hard-skills-container">
                        <div className="skill-info">React<span>90%</span></div>
                        <div className='skillbar'>
                            <div className="progress react"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Angular<span>70%</span></div>
                        <div className='skillbar'>
                            <div className="progress angular"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Node.js<span>50%</span></div>
                        <div className='skillbar'>
                            <div className="progress node"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Sass<span>80%</span></div>
                        <div className='skillbar'>
                            <div className="progress sass"></div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className="soft-skills-container">
                        <div className='soft-skill'><FontAwesomeIcon icon={faCheckCircle}/><span>Git Gitlab/Github</span></div>
                        <div className='soft-skill'><FontAwesomeIcon icon={faCheckCircle}/><span>MongoDB/PostgreSQL</span></div>
                        <div className='soft-skill'><FontAwesomeIcon icon={faCheckCircle}/><span>Firebase</span></div>
                        <div className='soft-skill'><FontAwesomeIcon icon={faCheckCircle}/><span>Python {"{Pandas,Pycharm}"}</span></div>
                    </div>
        
                </div>
        </div>
           
            <div className="mail-container"><span className='g-mail'>Ismo.bjr@gmail.com</span></div>
    </div>
    )
}

export default Sidebar