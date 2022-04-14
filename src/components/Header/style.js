import styled from 'styled-components';

export const Navbar = styled.div`
  z-index: 1;
  /* position: fixed;  */
  display: flex;
  height: 7vh;
  
  align-items: center;

  font-size: 1.8rem;
  color: black;

  div{
    text-align: right;
    padding-left: 10px;
    padding-right: 10px;
  }

  div:hover{
    color: goldenrod;
  };

`;
