import styled from 'styled-components';


export const ProjectDiv = styled.div`
background-color: whiteSmoke;

  height: 100vh;

  margin-top: 100px;
  margin-bottom: 20px;

  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;

  .titleProjects{
    text-align: center;
    color: black;
    font-size: 2.5rem;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 80px;
    span{
      color: goldenrod;
    }
  }

  .projectCards{
    display: flex;
    flex-direction: row;
  }

`;
