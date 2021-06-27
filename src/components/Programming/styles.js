import styled from 'styled-components';



export const LpBlocks = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 30vh;
    width: 40vh;
    
    margin-top: 10vh;
    margin-left: 60px;

    padding-bottom: 20px;
    padding-left: 0px;

    opacity: 78%;
    background-color: white;
    color: black;
    font-weight: bold;
    
    border: 12px solid darkslategray;
    border-radius: 20px 80px 40px 90px;

    .title{

        color: goldenrod;
        font-size: 1.8rem;
        font-weight: bold;
    }

    :hover{
        opacity: 92%;
        transition-delay: 50ms;
    }


`;