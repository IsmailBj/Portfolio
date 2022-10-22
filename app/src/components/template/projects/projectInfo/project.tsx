import './project.scss'
import {faMobilePhone,faTablet, faDesktop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { desktop } from '../../../../assets/img/export';


const project = (props: any) =>{
    // const arr = (param: string | number) => {
    //     return [{}].filter((item: { [x: string]: any; }) => item[param])
    // }



    return (
        <div className="project-container">
            <div className="info-container">
                <div className="close-container" onClick={()=> props.setShowProject(false)}>X</div>
                <div className="project-title">
                    <div className="title">Project Name</div>
                    <div className="category-container">
                        <span className='category'>Category - </span>
                        <span className='category-name'> Web Application </span>
                    </div>
                </div>
                <div className='divider'></div>
                <div className="project-info">
                    <div className="project-about">
                        <div className="about">Project Brief:</div>
                        <div className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, deleniti voluptate? Inventore nisi id tenetur ad. Veniam necessitatibus ut odio, sequi quis architecto suscipit qui voluptates repudiandae, rerum sapiente illum.</div>
                    </div>
                    <div className="project-info-details">
                        <div className="project-info-text">Project Info</div>
                        <div className="sub-info">
                            <div className="date sub"><span>Date - </span> 2020</div>
                            <div className="client sub"><span>Client - </span> xyz</div>
                            <div className="tools sub"><span>Tools - </span> React Sass</div>
                            <div className="path sub"><span>Github - </span><a href='#'> Github.com </a></div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
            </div>
            <div className='divider'></div>
            <div className="project-view">
                <div className="device-container">
                    <div className="device-list">
                        <div className="desktop-device device"><FontAwesomeIcon icon={faDesktop}/></div>
                        <div className="tablet-device device"><FontAwesomeIcon icon={faTablet}/></div>
                        <div className="mobile-device device"><FontAwesomeIcon icon={faMobilePhone}/></div>
                    </div>
                </div>
               
                <div className="img-container">
                    <img src={desktop} alt="" />
                </div>
            </div>
        </div>
    )
}


export default project