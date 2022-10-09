import './experience.scss'
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

const experience  = () => {

    return (
        <div className="exp-contianer" id='experience'>
            <div className="title-exp">Work Experience 
                <FontAwesomeIcon icon={faLaptopCode}/>
            </div>
            <div className="vertical"></div>
            <div className="experience first">
                <div className="exp-info">
                    <div className="date">Aug,01,2021 - Present</div>
                    <div className="work-title">Front-End Developer</div>
                    <div className="location"><span className='company'>KeepITSimple</span> - Skopje, North Macedonia</div>
                    <ul className="work-info">
                        <li className="info-one info">Developed and implemented ‘go-to-market’ strategy for cross-border feature.</li>
                        <li className="info-two info">Oversaw website redesign project that implemented new brand guidelines, updated product</li>
                        <li className="info-three info">Managed a team of two in executing on product-centric content marketing deliverables.</li>
                        <li className="info-four info">Implemented strategic marketing plan that shifted product strategy from prepaid card program provider to payments-as-a-service focus.</li>
                    </ul>
                </div>
            </div>
            <div className="vertical"></div>
            <div className="experience second">
                <div className="exp-info">
                    <div className="date">Aug,01,2021 - Present</div>
                    <div className="work-title">Front-End Developer</div>
                    <div className="location"><span className='company'>KeepITSimple</span> - Skopje, North Macedonia</div>
                    <ul className="work-info">
                        <li className="info-one info">Developed and implemented ‘go-to-market’ strategy for cross-border feature.</li>
                        <li className="info-two info">Oversaw website redesign project that implemented new brand guidelines, updated product</li>
                        <li className="info-three info">Managed a team of two in executing on product-centric content marketing deliverables.</li>
                        <li className="info-four info">Implemented strategic marketing plan that shifted product strategy from prepaid card program provider to payments-as-a-service focus.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
    


export default experience