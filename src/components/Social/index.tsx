import {SocialDiv} from './styles.js';
import  {LinkedinWithCircle , InstagramWithCircle, GithubWithCircle} from "@styled-icons/entypo-social";


const Social: React.FC = () => {

    return(
        <SocialDiv>
            <div className="divIcons">
                <a href="https://github.com/gserpeloni" >
                <GithubWithCircle className="icons"/>
                </a>
            </div>
            <div className="divIcons">
                <a href="https://www.linkedin.com/in/gustavoserpeloni/">
                    <LinkedinWithCircle className="icons" />
                </a>
            </div>
        </SocialDiv>
    );
};



export default Social;