import styled from 'styled-components';

export const QuemSouEuDiv = styled.div`
  width: auto;
  background-color: whitesmoke;
  height: auto;
  color: black;

  margin-bottom: 20px;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  flex-flow: wrap;

  .Banner{
      display: flex;
      flex-direction: row;
      flex-flow: wrap;

      .imgDiv{
        flex: 2 auto;
        width: auto;
        height: auto;

          img{
            padding-top: 20px;
            width: auto;
            height: auto;
            border-radius: 100%;
        };
      }

      .descriptionDiv{
        flex: 2 60%;
        display: flex;
        flex-direction: column;
        padding-top: 100px;
        margin: 0 auto;
        align-items: center;

        .title{
          font-size: 2.4rem;
          text-align: left;
          font-weight: bold;
          margin-bottom: 5vh;
        }

        .description{
          width: 80%;
          font-size: 1.8rem;
          text-align: left;
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