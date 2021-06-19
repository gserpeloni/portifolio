import {AboutDiv} from './styles'
import Programming from '../Programming';


const About: React.FC = () => {


    return (    
       <AboutDiv>
            <span> ABOUT ME </span>
            <div className="aboutmeDiv"> 
             Experience in backend and frontend projects with focus on <strong>REST API</strong> and
             microservices, using <strong>Relational Databases</strong>, prioritizing the <strong>Clean Code</strong> principles and applying <strong> automated tests </strong>.
             I have ability with <strong>team work</strong>, and <strong>creative solutions</strong>.
            </div>

            <div className="plDiv" >
                <Programming 
                    title="Backend"
                />
                <Programming
                    title="Frontend"
                />
                <Programming
                    title='Skills'
                />
            </div>
        </AboutDiv>
    );
}


export default About;