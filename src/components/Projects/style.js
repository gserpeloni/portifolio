import styled from 'styled-components';


export const ProjectDiv = styled.div`
  background-color: whitesmoke;
  height: auto;
  margin: 0 auto;

  margin-top: 20vh;
  margin-bottom: 20vh;

  display: flex;
  flex-direction: column;

  .titleProjects{
    border-right: 10px solid goldenrod;
    width: 90%;
    text-align: center;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    span{
      color: goldenrod;
    }
    margin-bottom: 10vh;
  }

  .projectCards{
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    background-color: none;
    width: auto;
    margin: 0 auto;
    border-radius: 20px;
    height: auto;

    padding-top: 20px;
    padding-bottom: 20px;
  }


  @media (max-width: 650px){

    .titleProjects{
      font-size:1.6rem;
    }

    .projectCards{
      font-size: 1.0rem;
    }
}

`;
