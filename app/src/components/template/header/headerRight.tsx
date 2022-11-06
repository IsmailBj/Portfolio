import React from "react";
import "./headerRight.scss"
import {faBars,faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {scrollCenter} from "../../functions/scrollPosition"

const Header = (props: any) =>{

    const {setIsMenu, isMenu,deviceView} = props
    
    return (
        <div className={`header-container`}>
            <div className="hamburger-menu" onClick={()=>setIsMenu(!isMenu)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="nav-container">
                <div className="nav-list" onClick={()=>scrollCenter("projects",deviceView,setIsMenu)}>
                    <div className="text" >Projects<div className="underline"></div></div>
                </div>
                <div className="nav-list" onClick={()=>scrollCenter("experience",deviceView,setIsMenu)}>
                    <div className="text">Experience<div className="underline"></div></div>
                </div>
                <div className="nav-list" onClick={()=>scrollCenter("education",deviceView,setIsMenu)}>
                    <div className="text">Education<div className="underline"></div></div>
                </div>
            </div>
            <div className="download-cv"><FontAwesomeIcon icon={faDownload}/><span>CV</span></div>
        </div>
    )
}

export default Header