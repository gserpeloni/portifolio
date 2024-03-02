import styled from 'styled-components';

export const SkillCards = styled.div`
    position: relative;
    margin-left: 8px;  
    padding: 5px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 7px 1px rgba(20, 20, 20, 30%);
    border-radius: 10px;
    list-style: none;
    font-size: 1.5rem;
    font-size: 20px;
    color: black;

    
    li{ 
        width: 110px;
        div{
            background-color: whitesmoke;
            color: black;

            img{
                background-color: transparent;
            }
        }
    }

    :hover{
       top: -5px;   
       border-bottom: 3px solid goldenrod ;
       div{
        color: black;
        font-weight: bolder;
       }

    }


`;