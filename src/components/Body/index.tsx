import React from 'react';
import Card from '../Card';
import {BodyDiv} from './style.js'

const Body: React.FC = () => {

const cards = () => {
  const size = 6;
  const cards = []
  for(let i = 0; i < size; i++){
      cards.push(<Card/>);
  }
  return cards;

}

  return(

    <BodyDiv>
     {cards()};
    </BodyDiv>

    );

}

export default Body;