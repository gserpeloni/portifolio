import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  /* background-color:  #78858C; */
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  margin-bottom: 20px;
  height: 80vh;

  color: white;

  img{
    width: auto;
    height: auto;
    border-radius: 100%;
  };

  .imgDiv{
    margin-top: -60px;
  };

  .quemSouEu{
    padding-top: 80px;
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