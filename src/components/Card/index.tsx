
import { InputHTMLAttributes } from 'react';
import {CardDiv} from './style'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  projectName: string;
  description: string;
  imageSrc?: string;
  link?: string;
}



const Card: React.FC<InputProps> = (props) => {

  return(
    
    <CardDiv>
     <div className="projectName"> 
       <a href={props.link} target="_blank"> 
        <img  src={props.imageSrc} />
        </a> 
     </div>
    
     <div className="projectDescription">  {props.description}</div>
    <div className="divColor"> {props.projectName} </div>
    </CardDiv>

    )

}

export default Card;