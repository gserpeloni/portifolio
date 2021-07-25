import {AboutDiv} from './styles'
import Skills from '../Skills';


const About: React.FC = () => {

    return (
       <AboutDiv>
            <div className="divTitle"> ABOUT ME </div>

            <div className="descriptionsDiv">
                <div className="aboutmeDiv">
                    I look for improve my programming skills and use creativity to design good frontend and great backend applications. I like to program logical circuits such as RaspberryPi and study new current technologies.
                <br/>Experience in backend and frontend projects with focus on REST API and microservices, using Relational Databases, prioritizing the Clean Code principles and applying automated tests. I have ability with team work, and creative solutions.                </div>

                <div className="plDiv" >
                    <Skills/>
                </div>
            </div>
        </AboutDiv>
    );
}


export default About;