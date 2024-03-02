import { InputHTMLAttributes } from 'react';
import {SkillCards} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    imgSrc: string;
    skillName: string;
}


const SkillCard: React.FC<InputProps> = (props) => {
    return(
        <SkillCards>
            <li>
                <div>
                    <img src={props?.imgSrc} alt=""/>
                </div>
                <div> {props?.skillName} </div>
            </li>
        </SkillCards>
    )
};


export default SkillCard;