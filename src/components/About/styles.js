import styled from 'styled-components';


export const AboutDiv = styled.div`
    
    
    height: auto;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 100px;
    padding-bottom: 80px;
    color: white;
    

    span{
        font-size: 1.8rem;
        font-family: 'Press Start 2P', cursive;
    }



    .descriptionsDiv{
        display: flex;
        flex: row;
        flex-flow: wrap;
    }

    .aboutmeDiv{
        margin-top: 10vh;
        text-align: justify;
        font-size: 1.9rem;
    }

    .plDiv{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        padding-bottom: 80px;
        width: 100%;
    }

    strong{
        color: goldenrod;
    }

    .languaguesDiv{
        width: 80%;
        margin: 0 auto;
    }

    ul{
    list-style-type: none;
    padding: 0;
        li{
            border-radius: 5%;
            background-size: 20px;
            :hover{
                background-color: goldenrod;
            }
        }
    }

    border-bottom: 10px solid rgba(0, 0, 0,10%);
    
`;