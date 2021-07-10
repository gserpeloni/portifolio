import {AboutDiv} from './styles'
import Programming from '../Programming';


const About: React.FC = () => {

    const languages:string[] =   ['Typescript+', 'Phyton', 'Java', 'C'];
    const backendSkills:string[] =   ['NodeJs+','SQL', 'MYSQL', 'AWS', 'DOCKER'];
    const frontendSkills: string[] = ['ReactJS+', 'Angular', 'CSS'];
    const othersSkills: string[] = []


    return (    
       <AboutDiv>
            <span> ABOUT ME </span>

            <div className="descriptionsDiv">   
                <div className="aboutmeDiv"> 
                Experience in backend and frontend projects with focus on <strong>REST API</strong> and
                microservices, using <strong>Relational Databases</strong>, prioritizing the <strong>Clean Code</strong> principles and applying <strong> automated tests </strong>.
                I have ability with <strong>team work</strong>, and <strong>creative solutions</strong>.
                </div>

                <div className="plDiv" >
                    <Programming 
                        title="Languages"
                        skills={languages}
                    />
                    <Programming 
                        title="Backend"
                        skills={backendSkills}
                    />
                    <Programming
                        title="Frontend"
                        skills={frontendSkills}
                    />
                    {/* <Programming
                        title='Skills'
                        skills={othersSkills}
                    /> */}
                </div>
            </div>
        </AboutDiv>
    );
}


export default About;