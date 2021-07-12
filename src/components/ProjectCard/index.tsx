
import { InputHTMLAttributes } from 'react';
import {CardDiv} from './style'


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
           Made With 
           <ul> 
             <li>icons</li>
           </ul>
        </div>
      </div>
    </CardDiv>

    )

}

export default ProjectCard;