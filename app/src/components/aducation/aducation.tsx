import './aducation.scss'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import Data from '../../data/userData.json'
import { UserData } from '../../interfaces/Interface';


const typedData = Data as UserData;


const Education: React.FC = () => {
	const { education } = typedData;
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
                        <div className="date">{edu.startDate} - {edu.endDate}</div>
                        <div className="edu-title">{edu.graduateTitle}</div>
                        <div className="location"><span className='university-name'>{edu.universityName}</span> - {edu.location}</div>
                        <ul className="uni-info">
                        {edu.aboutSkills.map((skill, index)=> <li className="skill0info" key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Education