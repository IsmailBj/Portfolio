import './sidebar.scss'
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faCheckCircle, faTrophy, faStar, faLaptopCode,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Avatar from '../../assets/img/userAvatar.png'
import userData from '../../data/userData.json'
import { Mailto } from '../../functions/sendMail';
import { openURL } from '../../functions/openURL';
import { SidebarProps, UserData } from '../../interfaces/Interface';

const Sidebar = (props: SidebarProps) =>{

    const {
        name,
        surname,
        country,
        city,
        skills,
        email,
        topSkills,
        media
    } = userData as UserData
    
    const {isProfile, setIsProfile} = props

    
    function getAge() {
        const birthDate = '1999-11-28';
        let ageInMilliseconds = new Date().getTime() - new Date(birthDate).getTime();
        return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    }


    return (
    <div className={`sidebar-container ${isProfile ? "active" : ""}`}>
        <div className="avatar-container">
            {isProfile && (<> <div className="close-profile" onClick={()=>setIsProfile(!isProfile)}>
                <FontAwesomeIcon icon={faArrowLeft}/>    
            </div></>)}
            <div className="avatar">
               <img src={Avatar} alt="" />
            </div>
            <div className='info-user'>
                <span className='name-surname' onClick={()=>openURL(media.linkedIn.url,'_blank')}>{name} {surname} 
                    <span className='linkedIn'>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </span>
                </span>
                <span className="work-title">Front-End Developer</span>
            </div>
        </div>
        <div className="info-contianer">
            <div className="info-location">
                <div className='residence'>
                    <span className='info'>Residence:</span>
                    <span className='data'>{country}</span>
                </div>
                <div className='city'>
                    <span className='info'>City:</span>
                    <span className='data'>{city}</span>
                </div>
                <div className='age'>
                    <span className='info'>Age:</span>
                    <span className='data'>{getAge()}</span>
                </div>

            </div>
                <div className='divider'></div>
                
                <div className="lang-container">
                    <div className='lang-en lang'><b>English</b>100%</div>
                    <div className='lang-alb lang'><b>Albanian</b>100%</div>
                    <div className='lang-mkd lang'><b>Macedonian</b>70%</div>
                </div>
                <div className='divider'></div>
                <div className="skills-container">
                    <div className="top-skills-container">
                        <div className='top-skill-title'><FontAwesomeIcon icon={faTrophy}/>Top Experince </div>
                        {topSkills.map((skill:string , index: number)=>{
                           return  <span className={'top-skills ' + skill} key={index}>{skill} <FontAwesomeIcon icon={faStar}/></span>
                        })}
                        
                    </div>
                   
                    
                    <div className='divider'></div>
                    <div className="other-skills-container">
                        <div className='other-skill-title'><FontAwesomeIcon icon={faLaptopCode}/>Other Skills</div>
                        {skills.map((skill: string, index: number)=>{
                            return  <div className={'other-skill ' + skill} key={index}><FontAwesomeIcon icon={faCheckCircle}/><span>{skill}</span></div>
                        })}
                    </div>
        
                </div>
        </div>
            <div className="mail-container"><Mailto email={email}/></div>
    </div>
    )
}

export default Sidebar