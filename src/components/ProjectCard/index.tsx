
import { InputHTMLAttributes } from 'react';
import {CardDiv} from './style'
import {Javascript, Html5} from '@styled-icons/boxicons-logos';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  projectName: string;
  description: string;
  imageSrc?: string;
  link?: string;
}


const ProjectCard: React.FC<InputProps> = (props) => {

  return(
    <CardDiv>
      <div className="divUm">
        <a>
          <img src={props?.imageSrc}/>
        </a>
      </div>
      <div className="divDois">
         <span className="projectName"> {props?.projectName} </span>
         <div className="projectDescription"> {props.description} </div>
         <div className="madeWithDiv">
           <div>Made With</div>
           <ul>
              <li><Javascript/></li>
               <li><Html5/></li>
           </ul>
        </div>
      </div>
    </CardDiv>

    )

}

export default ProjectCard;