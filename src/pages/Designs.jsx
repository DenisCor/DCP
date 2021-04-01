import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (isMobile) {
      setLabel('Go Back');
    }
  }, [handleOpen, setHandleOpen]);
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label={label}
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={
            <img src='../shark.png' className='img-slide-width' alt='shark' />
          }
          mediaBackgroundStyle={{ backgroundColor: '#212122' }}
          style={{ backgroundColor: '#212122' }}
          title='Shark Line Design'
          subtitle='Vector design created in Ai using mainly blend tool to give it that ghostly look, customizable, scalable and easy to use.'
        />
        <Slide
          media={
            <img src='../deer.png' className='img-slide-width' alt='deer' />
          }
          mediaBackgroundStyle={{ backgroundColor: '#212122' }}
          style={{ backgroundColor: '#212122' }}
          title='Deer Line Design'
          subtitle='Vector design created in Ai using mainly blend tool to give it that ghostly look, customizable, scalable and easy to use.'
        />
        <Slide
          media={
            <img src='../lion.png' className='img-slide-width' alt='lion' />
          }
          mediaBackgroundStyle={{ backgroundColor: '#212122' }}
          style={{ backgroundColor: '#212122' }}
          title='Lion Line Design'
          subtitle='Vector design created in Ai using mainly blend tool to give it that ghostly look, customizable, scalable and easy to use.'
        />
        <Slide
          media={<img src='../Bee.png' className='img-slide-width' alt='bee' />}
          mediaBackgroundStyle={{ backgroundColor: '#5b84b1' }}
          style={{ backgroundColor: '#5b84b1' }}
          title='Bee Artwork'
          subtitle='Vector artwork created in Adobe Illustrator Draw on iPad and finished on desktop, first time attempting to go for a cartoony theme.  '
        />
        <Slide
          media={
            <img src='../Logos.png' className='img-slide-width' alt='logos' />
          }
          mediaBackgroundStyle={{ backgroundColor: '#212122' }}
          style={{ backgroundColor: '#212122' }}
          title='Logos'
          subtitle='Some logos created from scratch in Ai for different projects including this portfolio, scalable and customizable'
        />
      </AutoRotatingCarousel>
    </div>
  );
};

const Designs = () => {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <div className='h4-wrapper'>
        <h1 className='text-link' data-content='DESIGNS'>
          DESIGNS
        </h1>
      </div>

      <Grid container>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>

        <Grid item container xs={12} sm={10} md={10} lg={10} xl={8}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'white', padding: '0 1rem' }}>
              <Fade left>
                <p
                  className='fontS'
                  style={{ textAlign: 'justify', fontSize: '1rem' }}
                >
                  I've always considered myself creative, expressing it through
                  different channels and graphic design was no exception. First
                  time I got my hands on Adobe Illustrator, I rediscovered the
                  love for digital art and the rest is history. It`s mainly a
                  hobby that brings joy, but also an important tool in my
                  arsenal. I may not have a full UI skill set and experience,
                  but being comfortable with tools like Illustrator and Figma I
                  can easily transition if required, especially under proper
                  guidance. When it comes to UI, I`m always leaning more towards
                  a clean minimalist look that involves very few colors and lots
                  of white space. One of my strategies in seeking inspiration is
                  browsing websites like Dribbble and Behance where I also
                  created profiles and experiment new ideas.
                </p>
                <div style={{ textAlign: 'center' }}>
                  <span>
                    {' '}
                    <a
                      href='https://www.behance.net/goosefx'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      <img
                        className='design-icons'
                        src='../Behance.svg'
                        alt='behance'
                      />
                    </a>
                    <a
                      href='https://dribbble.com/GooseFx'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      <img
                        className='design-icons'
                        alt='dribbble'
                        src='../Dribbble.svg'
                      />
                    </a>
                  </span>
                </div>

                <p
                  className='fontS'
                  style={{ textAlign: 'justify', fontSize: '1rem' }}
                >
                  {' '}
                  My design approach always starts with a terrible sketch that
                  slowly progresses towards the final stage of the design I
                  initially had in mind, whether it`s a digital illustration,
                  logo, typography, icons etc. My style constantly changes from
                  simple line art to cartoon illustrations to abstract shapes, I
                  guess that`s the beauty of creative freedom. I only specialize
                  in vector work, because of scalability advantage, small file
                  sizes plus I can always rasterize and convert it to a specific
                  format if that`s the case. Although my main focus is on web
                  development, graphic design will always be a useful asset
                  under my belt. In this never-ending learning journey, I look
                  forward to flexing my creative muscle when needed to and keep
                  on growing in both areas.
                </p>
              </Fade>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 1rem',
            }}
          >
            <img src='../eagle2.png' className='design-eagle' alt='eagle' />
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <Button
                variant='contained'
                color='default'
                style={{
                  width: '10rem',
                  marginTop: '3rem',
                  color: '#fff',
                  backgroundColor: '#5b84b1',
                }}
                className='btn-on-hover'
                onClick={handleClick}
              >
                SEE MORE
              </Button>
              <AutoRotatingCarouselModal
                isMobile={matches}
                handleOpen={handleOpen}
                setHandleOpen={setHandleOpen}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </>
  );
};

export default Designs;
