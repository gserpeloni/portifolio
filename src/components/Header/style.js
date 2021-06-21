import styled from 'styled-components';


export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr 0.9fr 0.9fr;
  grid-gap: 5px;

  float: right;

  margin-top: 20px;


  font-family: 'Press Start 2P', cursive;
  font-weight: bold;

  color: white;
  font-size: 1rem;
  height:2vh;

  position: sticky;

  div:hover{
    color: goldenrod;
  };

  span{
    font-size: 1.2rem;
  }

  div{
    text-align: right;
    padding-right: 2px;
  }


`;
