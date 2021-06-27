import React from 'react';
import Card from '../Card';
import {ProjectDiv} from './style.js'

const Projects: React.FC = () => {

const cards = () => {
  const size = 3;
  const cards = []
  for(let i = 0; i < size; i++){
      cards.push(<Card/>);
  }
  return cards;

}

  return(

    <ProjectDiv>
      <div className="titleProjects"> 
          PROJECTS
      </div>
      <div className="projectCards">
          {cards()}
      </div>
    </ProjectDiv>

    );

}

export default Projects;