import { InputHTMLAttributes, PropsWithChildren } from 'react';
import {LpBlocks} from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
    skills: string[]
}




const Programming: React.FC<InputProps>  = (props) => {

const skills = props?.skills.map((item) => {
    return(
     <li> 
        {item}
     </li>
    );
});


    return(
        <LpBlocks>
            <div className="title"> 
              {props.title}
            </div>
            <div className="languaguesDiv">
                <ul> 
                    {skills}
                </ul>
            </div>
       </LpBlocks>
    );

};


export default Programming;