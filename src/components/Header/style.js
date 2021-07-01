import styled from 'styled-components';


export const Navbar = styled.div`

  display: grid;
  grid-template-columns: 1fr 0.6fr 0.6fr 0.2fr 0.2fr;
  grid-gap: 2px;


  margin-top: 0px;
  margin-left: -40px;


  font-family: 'Press Start 2P', cursive;
  font-weight: bold;
  font-size: 1rem;
  color: white;

  
  height: 5vh;
  width: 100vw;
  
  

  z-index: 1;
  position: fixed;

  background-color: #23272E;

  align-items: center;
  

  div:hover{
    color: goldenrod;
  };

  span{
    font-size: 1.0rem;
  }

  div{
    text-align: right;
    padding-right: 80px;
  }

  .nameDiv{
    text-align: left;
    padding-left: 80px;
  }


`;
