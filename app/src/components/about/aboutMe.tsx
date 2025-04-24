import "./aboutMe.scss"
import ReactTypingEffect from 'react-typing-effect';
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { scrollCenter } from "../../functions/scrollPosition";
import Data from "../../data/userData.json"
import { UserData } from "../../interfaces/Interface";

const typedData = Data as UserData;

const AboutMe: React.FC = () => {

    return (
        <div className="about-container">
            <div className="blur-cover">
                <div className="text-right"><span><ReactTypingEffect text={["Hello,", "Bonjour", "Hallo"]} /> My name is {typedData.name} <br /> And I'm Software developer</span></div>
                <div className="bar"></div>
                <div className="text-left">
                    <p className="About-bold">About Me</p>
                    <p className="about-text">{typedData.aboutInfo}</p>
                </div>
                <div className="explore" onClick={()=>scrollCenter("projects")}>Explore <FontAwesomeIcon icon={faLaptopCode} /></div>
            </div>
        </div>
    )
}

export default AboutMe