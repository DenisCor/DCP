import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fade from 'react-reveal/Fade';
import SaveIcon from '@material-ui/icons/Save';
import Flip from 'react-reveal/Flip';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Image from './Image';

const useStyles = makeStyles(() => ({
  // root: {
  //  width:'500px',
  //  height:'500px',
  //  borderRadius:'500px',
  //  backgroundImage:'url(./tigara.jpeg)',
  //  backgroundPosition:'center',
  //  backgroundSize:'cover'
  // },
}));

const AboutPic = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      style={{
        display: 'flex',
        alignItems: 'center',

        height: '100%',
      }}
    >
      <Grid
        item
        style={{
          display: 'flex',
          justifyContent: 'center',
          // height: '35vh',
          paddingBottom: '3rem',
          width: '100%',

          marginBottom: '2rem',
        }}
      >
        <Flip left>
          {/* <img
            src='../DCpic.png'
            alt='Denis Corlotean picture'
            className='dc-image'
          /> */}

          <Image />
        </Flip>
      </Grid>
      <Grid
        item
        className='fontS'
        className='icons-info'
        style={{ padding: '2rem 0' }}
      >
        <Fade>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              style={{ color: 'white' }}
              className='icon-on-hover'
              href='https://github.com/agdgdag'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              style={{ color: 'white' }}
              className='icon-on-hover'
              href='https://www.instagram.com/goose_fx/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon style={{ fontSize: '1.7rem' }} />
            </IconButton>

            {/* <IconButton
              style={{ color: 'white' }}
              className='icon-on-hover'
              href='https://www.facebook.com/GooseFxStudio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon style={{ fontSize: '1.8rem' }} />
            </IconButton> */}
            {/* <IconButton
              style={{ color: 'white' }}
              className='icon-on-hover'
              href='https://twitter.com/fx_goose'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterIcon style={{ fontSize: '1.8rem' }} />
            </IconButton> */}
            <IconButton
              style={{ color: 'white' }}
              className='icon-on-hover'
              href='https://www.linkedin.com/in/deniscorlotean/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon style={{ fontSize: '1.8rem' }} />
            </IconButton>
          </div>
        </Fade>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 0 ',
          }}
        >
          <Button
            variant='contained'
            color='default'
            style={{
              width: '10.5rem',
              marginTop: '2rem',
              color: '#fff',
              backgroundColor: '#5b84b1',
            }}
            className='btn-on-hover'
            href='../Denis Corlotean - Resume.pdf'
            download='Denis Corlotean CV'
            endIcon={<SaveIcon />}
          >
            DOWNLOAD CV
          </Button>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: '1.3rem',

            textAlign: 'center',
          }}
        >
          <Fade left>
            <p style={{ padding: '1rem 0 ', paddingBottom: '4rem' }}>
              <cite>
                <span style={{ fontWeight: '500' }}>
                  " - Why did the functional programmer get thrown out of school ?
                  <br/>
                    - Because he refused to take classes.”
                </span>
              </cite>{' '}
            </p>
          </Fade>
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutPic;
