import React from "react";
import "./Center.scss"
import CenterBanner from '../about/centerbanner'

const Center = (props: any) =>{
    return (
        <div className="center-container">
            <div className="banner-top"><CenterBanner/></div>
        </div>
    )
}

export default Center