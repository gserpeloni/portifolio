import styled from 'styled-components';

export const SkillGrid = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    color: white;
    
    .titleDiv{
        text-align: left;
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 2.8rem;
        color: goldenrod;
        margin-bottom: 20px;
    }

    
    padding-top: 100px;

    ul{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
`;
