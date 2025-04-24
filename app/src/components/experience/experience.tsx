import './experience.scss'
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import Data from '../../data/userData.json'

import { UserData } from '../../interfaces/Interface';

const data = Data as UserData;


const Experience: React.FC  = () => {

    const {experience} = data
    
    return (
        <div className="exp-contianer" id='experience'>
            <div className="title-exp">Work Experience 
                <FontAwesomeIcon icon={faLaptopCode}/>
            </div>
            {experience.map((ex, index)=>{
                return <div className='experience-center' key={index}>
                    <div className="vertical"></div>
                    <div className="experience first">
                    <div className="exp-info">
                        <div className="date">{ex.startDate} - {ex.endDate}</div>
                        <div className="work-title">{ex.workTitle}</div>
                        <div className="location"><span className='company'>{ex.company}</span> - {ex.location}</div>
                        <ul className="work-info">
                            {ex.aboutSkills.map((skill, index)=> <li className="skill0info" key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div></div>
            })}
        </div>
    )
}
    


export default Experience