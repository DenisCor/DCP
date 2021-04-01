import React from 'react';
import ProjectsContent from '../components/ProjectsContent';
import { Grid } from '@material-ui/core';

const Projects = () => {
  return (
    <div className='projects-section'>
      <Grid container>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>

        <Grid item xs={12} sm={10} md={10} lg={10} xl={8}>
          <div className='h4-wrapper' style={{ paddingTop: '0px' }}>
            <h1 className='text-link' data-content='PROJECTS'>
              PROJECTS
            </h1>
          </div>

          <ProjectsContent />
        </Grid>

        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};

export default Projects;
