import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    window.mapboxgl.accessToken =
      'pk.eyJ1IjoiemFic291bmRzIiwiYSI6ImNrZ2w3Y2dxaDA4bHYycW8xbTdrdDNnMm4ifQ.O3iiP087SKD9s7X_dT9B1Q';
    var map = new window.mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/zabsounds/ckgl7y6ws4y9v19pbav4gn4g1', // stylesheet location
      center: [-3.188267, 55.953251], // starting position [lng, lat]
      zoom: 12.2, // starting zoom
    });

    var el = document.createElement('div');
    el.className = 'marker';
    var marker = new window.mapboxgl.Marker(el)
      .setLngLat([-3.188267, 55.953251])
      .addTo(map)
      .setPopup(new window.mapboxgl.Popup().setHTML('<h5>Hello there!</h5>'));
  });

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>

        <Grid item container xs={12} sm={10} md={10} lg={10} xl={8}>
          <div className='h4-wrapper'>
            <h4 className='text-link' data-content='CONTACT'>
              CONTACT
            </h4>
          </div>

          <Grid
            item
            container
            className='contact-grid-container'
            alignItems='center'
            xs={12}
            style={{
              height: 'auto',
              width: '100%',
              marginBottom: '6rem',
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{ height: '450px' }}
              className='wrapOrder'
            >
              <ContactForm />
              <Footer />{' '}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{ height: '450px' }}
              className='wrapOrder2'
            >
              {' '}
              <div id='map'></div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </>
  );
};

export default Contact;
