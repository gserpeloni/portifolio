import React from 'react';
import Card from '../ProjectCard';
import {ProjectDiv} from './style.js'
import { githubSearch, otherProject, proffyFrontendNLW } from '../ProjectCard/descriptions';

const Projects: React.FC = () => {


  return(

    <ProjectDiv>
      <div className="titleProjects"> 
          PROJECTS
      </div>
      <div className="projectCards">
          <Card {...githubSearch} />
          {/* <Card {...proffyFrontendNLW} /> */}
      </div>
    </ProjectDiv>

    );

}

export default Projects;