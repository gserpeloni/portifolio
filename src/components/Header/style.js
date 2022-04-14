import styled from 'styled-components';

export const HeaderDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'Montserrat Alternates', sans-serif;

  .imageDiv{
    img{
      width: 90%;
      height: 90% ;
    }
  }

  .descriptionDiv{
    margin: 0 auto;
    font-weight: bold;
    .description{
      strong{
        color: goldenrod;
      }
    }
  }
`;
