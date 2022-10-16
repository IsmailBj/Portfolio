import React from "react";
import "./headerRight.scss"
import {faBars,faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {scrollCenter} from "../functions/scrollPosition"

const Header = (props: any, ref: any) =>{

    const {setIsMenu, isMenu} = props

    return (
        <div className={`header-container ${isMenu ? "expend" : ""}`}>
            <div className="hamburger-menu" onClick={()=>setIsMenu(!isMenu)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="nav-container">
                <div className="nav-list" onClick={()=>scrollCenter("projects")}>
                    <div className="text" >Projects<div className="underline"></div></div>
                </div>
                <div className="nav-list" onClick={()=>scrollCenter("experience")}>
                    <div className="text">Experience<div className="underline"></div></div>
                </div>
                <div className="nav-list" onClick={()=>scrollCenter("education")}>
                    <div className="text">Education<div className="underline"></div></div>
                </div>
            </div>
            {/* <div className="media">
                    <a href={github.url} className={"media-links " + github.name}><FontAwesomeIcon icon={faGithub}/><span>{github.name}</span></a>
                    <a href={gitlab.url} className={"media-links " + gitlab.name}><FontAwesomeIcon icon={faGitlab}/><span>{gitlab.name}</span></a>
                </div>
                <div className='divider'></div> */}
            <div className="download-cv"><FontAwesomeIcon icon={faDownload}/><span>CV</span></div>
        </div>
    )
}

export default Header