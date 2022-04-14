import { SocialDiv } from './styles.js';
import { LinkedinWithCircle, GithubWithCircle } from "@styled-icons/entypo-social";

const Social: React.FC = () => {
    return (
        <SocialDiv>
            <div className="divIcons">
                <a href="https://github.com/gserpeloni" target="_blank">
                    <GithubWithCircle className="icons" />
                </a>
            </div>
            <div className="divIcons">
                <a href="https://www.linkedin.com/in/gustavoserpeloni/" target="_blank">
                    <LinkedinWithCircle className="icons" />
                </a>
            </div>
        </SocialDiv>
    );
};

export default Social;
