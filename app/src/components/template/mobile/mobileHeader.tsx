import './mobileHeader.scss'
import {faBars, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

const Header = (props: any) =>{

    const {setIsMenu, isMenu, setIsProfile,isProfile} = props
    
    return (
        <div className={`headerMob-container`}>
            <div className="profile-toggle" onClick={()=>setIsProfile(!isProfile)}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            <div className="navication-toggle" onClick={()=>setIsMenu(!isMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default Header