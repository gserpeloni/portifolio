import { AboutDiv } from './styles'
import Skills from '../Skills';

const About: React.FC = () => {
    const title = 'ABOUT ME';

    return (
        <AboutDiv>
            <div className="divTitle"> {title} </div>

            <div className="descriptionsDiv">
                <div className="aboutmeDiv">
                    <p> - I look for improve my programming skills and use creativity to design good frontend and great backend applications. I like to program logical circuits such as RaspberryPi and study new current technologies.</p>
                    <p> - Experience in backend and frontend projects with focus on <strong>REST API</strong>
                        and <strong>microservices</strong>, using <strong>NodeJS</strong>,
                        <strong>Typescript</strong> and focus on <strong>Relational Databases</strong>,
                        prioritizing the <strong>Clean Code</strong> principles and applying automated tests.
                        I have ability with <strong>team work</strong>, and <strong>creative solutions</strong>.
                    </p>
                </div>

                <div className="plDiv" >
                    <Skills />
                </div>
            </div>
        </AboutDiv>
    );
}


export default About;