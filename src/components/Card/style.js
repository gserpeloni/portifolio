import styled from 'styled-components';


export const CardDiv = styled.div`

  margin: 0 auto;
  align-items: center;
  justify-items: center;

  width: 20%;
  height: 45vh;
  
  display: grid;
  grid-template-rows: 1fr 0.2fr 0.1fr;
  
  
  font-size: larger;
  border: 2px solid black;
  border-radius: 20px;

  
  .projectName{
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color: black;
    font-weight: bold;

    img{
      border-radius: 20px 20px 0px ;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  
  }

  .projectDescription{
    background-color: white;
    font-size: 1rem;
    color: black;
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    padding-bottom: 20px;
    
  }

  .divColor{
    width: 100%;
    height:100%;
    background-color: darkgreen;
    border-radius: 0px 0px 14px 14px;
    
  }


`;