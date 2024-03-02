import styled from 'styled-components';

export const NavbarDiv = styled.div`
  /* z-index: 1; */
  display: flex;
  flex-wrap: wrap;
  height: auto;
  font-weight: bold;

  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;


  .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div{
      padding-left: 10px;
      padding-right: 10px;

      :hover{
        color: goldenrod;
      }
    }
  }

  .logo{
    padding-left: 10px;
    h2:hover{
      color: goldenrod;
    }
  }

`;
