


export const project = () =>{

    return (
        <div className="project-container">
            <div className="info-container">
                <div className="close-container">X</div>
                <div className="project-title">
                    <div className="title">Project Name</div>
                    <div className="category">
                        <span>Category </span>- Web Application
                    </div>
                </div>
                <div className='divider'></div>
                <div className="project-infos">
                    <div className="project-about">
                        <div className="about"></div>
                        <div className="about-text"></div>
                    </div>
                    <div className="project-info">
                        <div className="project-info-text">Project Info</div>
                        <div className="sub-info">
                            <div className="date"><span>Date</span> - 2020</div>
                            <div className="client"><span>Client</span> - xyz</div>
                            <div className="tools"><span>Tools</span> - React Sass</div>
                            <div className="web"><span>Webb</span> - www.domain.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-view">
                <div className="device">
                    <div className="desktop-device"></div>
                    <div className="tablet-device"></div>
                    <div className="mobile-device"></div>
                </div>
                <div className="img-container">

                </div>
            </div>
        </div>
    )
}