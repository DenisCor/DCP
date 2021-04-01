import React from 'react';
import ProjectsCard from './ProjectsCard';
import { Grid } from '@material-ui/core';
import MyProjects from '../utils/MyProjects.js';
import Zoom from 'react-reveal/Zoom';

const ProjectsContent = () => {
  return (
    <Grid container spacing={4}>
      {MyProjects.map((project) => (
        <Grid key={project.id} item xs={12} sm={6} md={6} lg={4}>
          {' '}
          <Zoom>
            <ProjectsCard
              name={project.name}
              description={project.description}
              imageURL={project.imageURL}
              webLink={project.webLink}
              expandedDescription={project.expandedDescription}
              githubLink={project.githubLink}
            />
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
};
export default ProjectsContent;
