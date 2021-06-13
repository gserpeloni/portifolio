import styled from 'styled-components';


export const CardDiv = styled.div`

  align-items: center;
  justify-items: center;
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-row: repeat(3, 1fr);
  
  grid-gap: 2px;
  background-color: white;
  font-size: larger;

  margin-top: 50px;
  
  
  .projectName{
    font-size: 1.2rem;
    color: black;
    font-weight: bold;
  }

  .projectDescription{
    font-size: 1rem;
    color: darkgray;

  }



`;