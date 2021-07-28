import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  color: black;

  margin-bottom: 20px;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  flex-flow: wrap;

  .Banner{
      display: flex;
      flex-direction: column;
      flex-flow: wrap;


      .imgDiv{
        flex: 2 auto;
          img{
            width: 80%;
            height: 90%;
            padding-top: 20px;
            border-radius: 100%;
        };
        margin: 0 auto;
        padding: 20px;
      }

      .descriptionDiv{
        flex: 2 40%;
        display: flex;
        flex-direction: column;
        padding-top: 100px;
        margin: 0 auto;
        align-items: center;

        .title{
          font-size: 2.4rem;
          text-align: center;
          font-weight: bold;
          margin-bottom: 5vh;
        }

        .description{
          font-size: 1.8rem;
          text-align: justify;
          padding: 0px 40px 0px 20px;
          word-spacing: 0.2em;
          line-height: 1.2;
        }
      }

      margin-bottom: 15vh;
  }

  strong{
    color: goldenrod;
  }

`;