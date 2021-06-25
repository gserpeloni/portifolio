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
    
    border: 12px solid silver;

    border-radius: 10px 10px 100px 100px;

    .title{
        margin-left: -10px;
        margin-right: -10px;
        margin-top: -10px;
        background-color: black;
        border: 8px  solid silver;
        border-radius: 10px 10px 40px 40px;

        color: goldenrod;
        font-size: 1.8rem;
        font-weight: bold;
    }

    :hover{
        opacity: 92%;
        transition-delay: 50ms;
    }


`;