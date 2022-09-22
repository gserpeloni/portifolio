import styled from 'styled-components';

export const SkillCards = styled.div`
    position: relative;
    width: auto;
    margin: 8px;  
    padding: 5px;
    box-shadow: 0px 0px 7px 1px rgba(20, 20, 20, 30%);

    list-style: none;
    font-size: 1.5rem;
    
    
    li{ 
        div{
            color: white;
            align-items: center;
            img{
                background-color: transparent;
            }
        }
    }

    :hover{
       top: -5px;   
       background-color: black; 
       div{
        color: black;
            background-color: white; 
            font-weight: bolder;
       }

    }


`;