import styled from 'styled-components';



export const LpBlocks = styled.div`
    display: flex;
    flex-direction: row;
    
    height: auto;
    width: 100%;
    
    margin-top: 10vh;
    margin-left: 60px;

    padding-bottom: 10px;
    padding-left: 0px;

    opacity: 78%;
    color: white;
    background-color: none;
    font-weight: bold;
    
    border-left: 2px solid goldenrod;
    border-radius: 10px 10px 30px 30px;

    .title{
        color: goldenrod;
        font-size: 1.8rem;
        font-weight: bold;
    }

    :hover{
        opacity: 92%;
        transition-delay: 50ms;
    }

    ul li{
        display: inline;
        margin-left: 20px;
    }

`;