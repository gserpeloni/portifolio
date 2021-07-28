import styled from 'styled-components';


export const AboutDiv = styled.div`
    
    height: auto;
    padding: 0;
    font-size: 1.5rem;
    margin-bottom: 100px;
    padding-bottom: 80px;
    color: black;
    margin: 0 auto;
    
    

    .divTitle{
        width: 90%;
        font-size: 3rem;
        font-weight: bold;
        margin: 0 auto;
        text-align: center;
        border-left: 10px solid goldenrod;
    }



    .descriptionsDiv{
        display: flex;
        flex-direction: column;
        flex-flow: wrap;
        margin-top: 10vh;
        font-family: 'Montserrat Alternates', sans-serif;
        
    }

    .aboutmeDiv{
        width: 90%;
        margin: 0 auto;
        text-align: justify;
        font-size: 1.8rem;
        word-spacing: 0.2em;
        line-height: 1.3;
        font-weight: bold;
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



    
`;