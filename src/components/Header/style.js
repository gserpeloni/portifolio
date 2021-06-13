import styled from 'styled-components';


export const Navbar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  float: right;


  font-family: 'Press Start 2P', cursive;
  font-weight: bold;
  
  color: white;
  font-size: 1rem;
  height:2vh;

  div:hover{
    color: goldenrod;
  };

`;
