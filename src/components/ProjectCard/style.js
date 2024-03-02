import styled from 'styled-components';


export const CardDiv = styled.div`
  width: 40%;

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
    padding-bottom: 20px;
    flex:1 50% ;
    padding: 20px;
     img{
      border: 1px solid silver;
      border-radius: 10px;
      box-shadow: 0px 0px 7px 1px rgba(20, 20, 0, 30%);
      width: 100%;
      height: 100%;
     }
  }

  .divDois{
    flex: 1 60%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-right: 30px;
    padding-left: 30px;

    span{
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .projectDescription{
      font-size: 1.5rem;
      margin-bottom: 40px;
    }

    .madeWithDiv{
      height: auto;
      font-size: 1.6rem;
      font-weight: bold;
      background-color: whitesmoke;
      border-radius: 10px;
      border: 1px solid silver;
      padding: 5px;
      margin-bottom: 20px;
      
      ul{
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        padding: 0;
      }
      
      li{
        padding: 5px;
        width: 10%;
        list-style: none;
      }
    }

  }

  @media (max-width: 650px){
     flex-flow: wrap;

  }

`;