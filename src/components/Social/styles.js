import styled from 'styled-components';

export const SocialDiv = styled.div`
    width: 90vw;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: black;
    display: flex;

    padding-bottom: 20px;
    padding-top: 20px;

    display: flex;
    flex-direction: row;


    .divIcons{
        height: 10vh;
        width: 10vh;
        margin-left: 20px;
    }

    .icons{
        margin: 0 auto;
        height: 100%;
        width: 100%;
        fill: black;
        :hover{
            fill: goldenrod;
            opacity: 0.96;
        }
        
    };

    margin-bottom: 20vh;

`;
