import {SocialDiv} from './styles.js';
import  {LinkedinWithCircle , InstagramWithCircle, GithubWithCircle} from "@styled-icons/entypo-social";


const Social: React.FC = () => {

    return(
        <SocialDiv>
            <a href="https://github.com/gserpeloni" >
               <GithubWithCircle className="icons"/>
            </a>

            <a href="https://www.linkedin.com/in/gustavoserpeloni/">
                <LinkedinWithCircle className="icons" />
            </a>

            <InstagramWithCircle className="icons"/>
        </SocialDiv>
    );
};



export default Social;