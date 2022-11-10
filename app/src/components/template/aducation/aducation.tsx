import './aducation.scss'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import data from '../../../data/userData.json'

const aducation  = () => {
    const {education} = data
    return (
        <div className="edu-contianer" id='education'>
            <div className="title-edu">Educations 
                <FontAwesomeIcon icon={faUserGraduate}/>
            </div>
            {education.map((edu,index)=>{
                return <div className='education-center' key={index}>
                    <div className="vertical"></div>
                    <div className="education first">
                    <div className="edu-info">
                        <div className="date">{edu["start-date"]} - {edu["end-date"]}</div>
                        <div className="edu-title">{edu['graduate-title']}</div>
                        <div className="location"><span className='university-name'>{edu['university-name']}</span> - {edu.location}</div>
                        <ul className="uni-info">
                        {edu['about-skills'].map((skill, index)=> <li className="skill0info" key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default aducation