
import {CardDiv} from './style'

const Card: React.FC = () => {

  return(

    <CardDiv>
     <div className="projectName"> 
       <a href="https://gserpeloni.github.io/githubsearch/" target="_blank"> 
        <img  src="https://github.githubassets.com/images/modules/site/social-cards/github-social.png" />
        </a> 
     </div>
          
     <div className="projectDescription"> 
       Website frontend that consume REST API, to search informations about the users of Github
      </div>

    </CardDiv>

    )

}

export default Card;