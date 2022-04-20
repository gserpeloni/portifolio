import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  flex-direction: row;
  font-family: 'Montserrat Alternates', sans-serif;

  .imageDiv{
    img{
      width:80%;
      height:80%;
    }
  } 

  .descriptionDiv{
    font-weight: bold;
    .description{
      strong{
        color: goldenrod;
      }
    }
  }
`;
