import styled from 'styled-components';

export const AboutDiv = styled.div`
    height: auto;
    padding: 0;
    padding-bottom: 80px;
    margin: 0 auto;
    box-shadow: 0 8px 10px rgb(0, 0, 0, 0.5);
    margin-bottom: 20%;
    
    .divTitle{
        width: 90%;
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        border-left: 10px solid goldenrod;
    }

    .descriptionsDiv{
        display: flex;
        flex-direction: column;
        flex-flow: wrap;
        margin-top: 5vh;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    .aboutmeDiv{
        width: 90%;
        margin: 0 auto;
        text-align: left;
        font-size: 2.8rem;
        word-spacing: 0.2em;
        line-height: 1.3;
        p{
            font-weight: bold
        };
    }

    .plDiv{
        margin: 0 auto;
        width: 90%;
        margin-top: 40px;        
    }

    strong{
        color: goldenrod;
    }

    .languaguesDiv{
        width: 80%;
        margin: 0 auto;
    }

  @media (max-width: 650px){

    .divTitle{
       font-size:1.6rem;
    }

    .aboutmeDiv{
      font-size: 1.2rem;
    }
  }
`;