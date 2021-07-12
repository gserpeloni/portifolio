import styled from 'styled-components';


export const ProjectDiv = styled.div`
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
    width: 100%;
    margin: 0 auto;
    border-radius: 20px;
    height: auto;


    padding-top: 20px;
    padding-bottom: 20px;
  }


`;
