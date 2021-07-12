import styled from 'styled-components';



export const SkillGrid = styled.div`
    
    display: flex;
    flex-direction: column;
    border: 4px solid whitesmoke;
    background-color: rgba(255, 255, 255, 88%);
    box-shadow: 0px 0px 7px 1px rgba(20, 20, 20, 30%);
    border-radius: 20px;
    color: black;
    
    .titleDiv{
        text-align: left;
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 1.8rem;
        color: goldenrod;
        box-shadow: 0px 2px 0px rgba(0, 0, 0,80%);
        margin-bottom: 20px;
    }

    width: 90%; 
    height: auto;
    
    margin: 0 auto;
    padding-left: 20px;
    padding-top: 20px;

    ul{
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }



`;