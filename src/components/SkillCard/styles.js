import styled from 'styled-components';



export const SkillCards = styled.div`

    position: relative;
    width: 100px;

    background-color: blacksmoke;
    border-radius: 10px ;
    border: 1px solid silver;
    box-shadow: 0px 0px 7px 1px rgba(20, 20, 20, 30%);

    list-style: none;
    font-size: 0.8rem;


    align-items: center;

    margin: 8px;
    padding-bottom: 10px;
    padding-top: 10px;
    
    
    li{

        margin: 0 auto;
        color: black;
        font-weight: bold;

    }

    :hover{
       top: -5px;   
       background-color: goldenrod; 

       li{
           color: white;
       }
    }


`;