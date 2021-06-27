import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  /* background-color:  #78858C; */
  display: grid;
  grid-template-columns: 1fr;
  
  align-items: left;
  justify-content: left;
  
  height: 70vh;
  
  
  color: white;
  
  z-index: 0;

  margin-bottom: 20px;
  margin-left: 20px;

  img{
    padding-top: 150px;
    width: auto;
    height: 60%;
    border-radius: 100%;
  };

  .imgDiv{
    background-color: none;
  };

  .quemSouEu{
    a {
      text-decoration:none;
    }
    margin-top: 30px;
    font-size: 1.5rem;
    div{
      font-family: 'Press Start 2P', cursive;
      span{
        color: goldenrod;
      }
    }
    text-align: middle;
  };

`;