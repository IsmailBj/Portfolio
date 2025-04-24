import './projects.scss'
import ImgProject from '../../assets/img/img-holder.png'
import Data from '../../data/userData.json'
import { ProjectsProps, UserData } from '../../interfaces/Interface'

const data = Data as UserData;

const Projects: React.FC<ProjectsProps> = ({setShowProject}) =>{
    const {projects} = data
    const {Bflow} = projects
    
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

                <div className="project-box" onClick={()=> setShowProject(true)}>
                    <img src={require(`../../assets/img/projects/${Bflow.title}/${Bflow.title}-thumnail.png`)} alt="404" />
                    <div className="pro-title"> {Bflow.title}</div>
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


export default Projects