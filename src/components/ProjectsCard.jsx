import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Expand from './Expand';

const useStyles = makeStyles({
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: '100%',
    height: '10rem',
  },
  card: {
    padding: '0.3rem',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
  },
  cardHover: {
    padding: '0.3rem',
    backgroundColor: 'transparent',
    border: '1px solid #e2716f',
    boxShadow: 'inset 0px 0px 2px 1px #e2716f',
  },
});

const ProjectsCard = ({
  name,
  description,
  imageURL,
  webLink,
  expandedDescription,
  githubLink,
}) => {
  const classes = useStyles();
  const [borderColor, setBorderColor] = useState(false);

  const changeBorderColor = (bool) => {
    setBorderColor(bool);

    console.log(borderColor);
  };

  return (
    <Card className={borderColor ? classes.cardHover : classes.card}>
      <CardContent
        style={{ padding: '0.5rem', color: 'white', textAlign: 'center' }}
      >
        <CardMedia component='img' className={classes.media} image={imageURL} />

        <Typography
          variant='h4'
          component='h6'
          style={{
            paddingBottom: '0.5rem',
            fontSize: '1rem',
            letterSpacing: '0.5px',
            textAlign: 'center',
            fontFamily: 'Red Hat Display',
            color: '#fff',
          }}
        >
          <span> {name} </span>
        </Typography>
        <Typography
          variant='body2'
          component='p'
          style={{ fontFamily: 'Red Hat Display', paddingBottom: '0.5rem' }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center', paddingBottom: '1rem' }}>
        <Expand
          url={webLink}
          name={name}
          expandedDescription={expandedDescription}
          changeBorderColor={changeBorderColor}
          githubLink={githubLink}
        />
      </CardActions>
    </Card>
  );
};

export default ProjectsCard;
