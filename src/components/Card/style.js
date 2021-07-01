import styled from 'styled-components';


export const CardDiv = styled.div`
  
  position: relative;

  margin-left: 60px;
  align-items: center;
  justify-items: center;

  width: 20%;
  height: 60vh;
  
  display: grid;
  grid-template-rows: 1fr 0.2fr 20px;
  
  
  font-size: larger;
  border: 6px solid rgba(10, 10, 0, 0.82);
  border-radius: 10px;

  box-shadow: 0px 5px 10px rgba(110, 100, 40, 0.65);
  
  .projectName{
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color: black;
    font-weight: bold;

    img{
      border-radius: 20px 20px 0px 0px ;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  
  }

  .projectDescription{
    background-color:  rgba(0, 0, 0, 0,001);
    background-color: none;
    font-size: 1rem;
    color: white;
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    padding-bottom: 20px;
    border-radius: 0px 0px 2px 2px;
    
  }

  .divColor{
    width: 100%;
    height:100%;
    background-color: goldenrod;
    border-radius: 0px 0px 8px 8px;
    color: white; 
    font-weight: bold;
    font-size: 1.0rem;
    
  }
  
  :hover{
    top:-20px;
    box-shadow:0 2px 2px lightgray
  }

`;