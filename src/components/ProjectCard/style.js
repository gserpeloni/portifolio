import styled from 'styled-components';


export const CardDiv = styled.div`
  width: 70%;
  height: 40vh;

  margin: 0 auto;
  background-color: white;

  border: 1px solid silver;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 1px rgba(20, 20, 20, 30%);

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  .divUm{
    flex:1 40% ;
     img{
      border: 1px solid si;
      border-radius: 10px;
      box-shadow: 0px 0px 7px 1px rgba(20, 20, 0, 30%);
      width: 80%;
      height: 80%;
     }
  }

  .divDois{
    flex: 1 60%;
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-size: 1.5rem;
    padding-right: 30px;

    span{
      font-weight: bold;
      margin-bottom: 30px;
    }

    .projectDescription{
      font-size: 1.2rem;
      margin-bottom: 40px;
    }

    .madeWithDiv{

    }

  }

`;