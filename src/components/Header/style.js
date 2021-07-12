import styled from 'styled-components';


export const Navbar = styled.div`
  width: 100%;
  position: fixed; 
  display: grid;
  grid-template-columns: 0.4fr 0.2fr 0.1fr 0.1fr 0.1fr;



  font-family:'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;

  
  height: 7vh;
  
  z-index: 1;

  background-color: #23272E;
  opacity: 80%;

  align-items: center;
  

  div:hover{
    color: goldenrod;
  };

  span{
    font-size: 1.6rem;
  }

  div{
    text-align: right;
  }

  .nameDiv{
    text-align: left;
    padding-left: 80px;
  }


`;
