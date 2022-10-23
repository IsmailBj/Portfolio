/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.scss'
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Avatar from '../../assets/img/userAvatar.png'
import userData from '../../data/userData.json'


const Sidebar = (props: any) =>{

    const {
        name,
        surname,
        country,
        city,
        skills,
        media,
        email
    } = userData
    
    const {linkedIn,github,gitlab} = media

    function getAge() {
        let ageInMilliseconds:any = (new Date().getTime() - new Date('1999-11-28').getTime());
        return Math.floor(ageInMilliseconds/1000/60/60/24/365)
     }


    return (
    <div className="sidebar-container">
        <div className="avatar-container">
            <div className="avatar">
               <img src={Avatar} alt="" />
            </div>
            <div className='info-user'>
                <span className='name-surname'>{name} {surname} 
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
                    <div className="hard-skills-container">
                        <div className="skill-info">React<span>90%</span></div>
                        <div className='skillbar'>
                            <div className="progress react"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Angular<span>70%</span></div>
                        <div className='skillbar'>
                            <div className="progress angular"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Node.js<span>50%</span></div>
                        <div className='skillbar'>
                            <div className="progress node"></div>
                        </div>
                    </div>
                    <div className="hard-skills-container">
                        <div className="skill-info">Sass<span>80%</span></div>
                        <div className='skillbar'>
                            <div className="progress sass"></div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className="soft-skills-container">
                        {skills.map((skill: any, index: any)=>{
                            return  <div className={'soft-skill ' + skill} key={index}><FontAwesomeIcon icon={faCheckCircle}/><span>{skill}</span></div>
                        })}
                    </div>
        
                </div>
        </div>
           
            <div className="mail-container"><span className='g-mail'>{email}</span></div>
    </div>
    )
}

export default Sidebar