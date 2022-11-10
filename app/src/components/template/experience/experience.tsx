import './experience.scss'
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import data from '../../../data/userData.json'

const experience  = () => {

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
                        <div className="date">{ex["start-date"]} - {ex["end-date"]}</div>
                        <div className="work-title">{ex["work-title"]}</div>
                        <div className="location"><span className='company'>{ex.company}</span> - {ex.location}</div>
                        <ul className="work-info">
                            {ex['about-skills'].map((skill, index)=> <li className="skill0info" key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div></div>
            })}
        </div>
    )
}
    


export default experience