import React from "react";
import "./headerRight.scss"
import {faBars,faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

const Header = (props: any) =>{

    return (
        <div className="header-container">
            <div className="hamburger-menu">
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="nav-list">
                <div className="home">Home<div className="underline"></div></div>
                
            </div>
            <div className="download-cv"><FontAwesomeIcon icon={faDownload}/><span>CV</span></div>
        </div>
    )
}

export default Header