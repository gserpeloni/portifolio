import { InputHTMLAttributes, PropsWithChildren } from 'react';
import {LpBlocks} from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}


const Programming: React.FC<InputProps>  = (props) => {
    return(
        <LpBlocks>
            <div className="title"> 
              {props.title}
            </div>
            <div className="languaguesDiv">
                <ul> 
                    <li> L1 </li>
                    <li> L2 </li>
                    <li> L3 </li>
                    <li> L4 </li>
                </ul>
            </div>
       </LpBlocks>
    );

};


export default Programming;