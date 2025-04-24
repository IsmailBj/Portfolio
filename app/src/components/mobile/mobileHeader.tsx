import './mobileHeader.scss'
import {faBars, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { HeaderMobProps } from '../../interfaces/Interface';

const Header: React.FC<HeaderMobProps> = ({setIsMenu, isMenu, setIsProfile, isProfile}) =>{
    
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