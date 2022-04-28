import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-family: 'Montserrat Alternates', sans-serif;
  /* flex-wrap: wrap; */

  .imageDiv{
    flex: 1 50%;
    width: auto;
    height: 80vh;
    img{
      width: 100%;
      height: 100%;
      object-fit: fit;
      background-color: #282836 ;
    }
  }

  .descriptionDiv{
    flex: 2 50%;
    padding-left: 10px;
    padding-right: 10px;

    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0 auto;
    justify-content: space-between;
    
  .title{
      margin-top: 20px;
      font-size: 5rem;
      color: #C4ff00;
      text-align: center;
      text-shadow: 0.9px 0.9px gray;
      margin-bottom: 60px ;
      font-weight: bold;
  }

  .description{
    height: 150px ;
    border: 1px solid rgba(20,20,20, 0.6);
    border-radius: 5px;
    box-shadow: 0 8px 10px rgb(0, 0, 0, 0.5);
    padding: 5px;
    text-align: justify;
    text-justify: inter-word;
    font-size: 3rem;
      strong{
        color: #C4ff00;
      }
   }
  }
  
`;
