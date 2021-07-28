import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  background-color: whitesmoke;
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
            padding-top: 20px;
            border-radius: 100%;
        };
      }

      .descriptionDiv{
        flex: 2 30%;
        display: flex;
        flex-direction: column;
        padding-top: 100px;
        margin: 0 auto;
        align-items: center;
        font-weight: bold;

        .title{
          font-size: 5em;
          text-align: center;
          margin-bottom: 5vh;
          font-family: Arial, Helvetica, sans-serif, Times, serif, sans-serif;
        }

        .description{
          font-size: 3.5em;
          text-align: left;
          padding: 0px 40px 0px 20px;
          word-spacing: 0.02em;
          line-height: 1.5;
          font-family: 'Montserrat Alternates', sans-serif;
        }
      }

      margin-bottom: 15vh;
  }

  strong{
    color: goldenrod;
  }


  @media (max-width: 520px){
    .Banner{

      .imgDiv{
          flex: 2 auto;
            img{
              width: 80%;
              height: 90%;
              padding-top: 20px;
              border-radius: 100%;
          };
        }
  }
}

`;