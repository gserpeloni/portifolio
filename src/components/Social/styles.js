import styled from 'styled-components';

export const SocialDiv = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    padding-bottom: 20px;
    padding-top: 20px;

    display: flex;
    flex-direction: row;


    .divIcons{
        height: auto;
        width: 10vh;
        margin-left: 20px;
    }

    .icons{
        margin: 0 auto;
        height: auto;
        width: auto;
        fill: black;
        :hover{
            fill: goldenrod;
            opacity: 0.96;
        }

    };

    margin-bottom: 20vh;

`;
