import React from 'react';
import Card from '../Card';
import {ProjectDiv} from './style.js'

const Projects: React.FC = () => {

const cards = () => {
  const size = 2;
  const cards = []
  for(let i = 0; i < size; i++){
      cards.push(<Card/>);
  }
  return cards;

}

  return(

    <ProjectDiv>
    <div className="titleProjects"> PROJECTS <span>*</span></div>
     {cards()}
    </ProjectDiv>

    );

}

export default Projects;