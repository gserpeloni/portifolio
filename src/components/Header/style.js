import styled from 'styled-components';


export const Navbar = styled.div`
  width: 100%;
  position: fixed; 
  display: flex;
  flex-direction: row;
  flex-flow: wrap;




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
    padding-left: 10px;
    padding-right: 10px;

  }

  .nameDiv{
    flex: 1 40%;
    text-align: left;
    padding-left: 80px;
  }


  @media(max-width: 650px){
    font-size: 1.0rem;

    .nameDiv{
       font-size: 0.2rem;
       flex: 1 0%;
       padding: 0;
    }
  }

`;
