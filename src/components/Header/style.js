import styled from 'styled-components';


export const Navbar = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  float: right;

  font-size: 1.2rem;
  font-weight: bold;
  color: gray;

  div:hover{
    color: goldenrod;
  };

`;
