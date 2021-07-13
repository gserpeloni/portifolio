import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  background-color:  none;
  opacity: 90%;

  height: 70vh;
  color: black;
  z-index: 0;

  margin-bottom: 20px;

  .imgDiv{
    margin-left: 10vh;
    width: 30%;
    height: auto;

      img{
      padding-top: 80px;
      width: 100%;
      height: 80%;
      border-radius: 100%;
    };
  }

  @media(max-width: 1040px){
    align-items: center;
    justify-content: center;
    .imgDiv{
      width: 60%;
      img{
        padding-top: 60px;
        width: 80%;
        height: 100%;
        border-radius: 400%;
      };
  }
  }

  
`;