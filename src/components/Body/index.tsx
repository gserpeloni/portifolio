import React from 'react';
import Card from '../Card';
import {BodyDiv} from './style.js'

const Body: React.FC = () => {

  return(

    <BodyDiv>
      <Card/>
      <Card/>
      <Card/>
    </BodyDiv>

    );

}

export default Body;