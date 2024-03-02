import styled from 'styled-components';

export const SocialDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 10px;

    .divIcons{
        height: auto;
        width: 50px;
        margin-left: 20px;
    }

    .icons{
        fill: white;
        :hover{
            fill: #C4ff00;
            opacity: 0.96;
        }

    };

    margin-bottom: 20vh;

`;
