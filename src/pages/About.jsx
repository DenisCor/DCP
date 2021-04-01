import React, { useRef } from 'react';
import AboutText from '../components/AboutText';
import AboutPic from '../components/AboutPic';
import { Grid } from '@material-ui/core';
import { Canvas, useFrame } from 'react-three-fiber';

import { OrbitControls, Stars } from 'drei';

const Model = ({ url, ...props }) => {
  const meshS = useRef(null);
  useFrame(() => (meshS.current.rotation.z += -0.0005));
  return (
    <group {...props}>
      <Stars
        ref={meshS}
        radius={10}
        depth={50}
        count={800}
        factor={1}
        saturation={1000}
        fade
      />
    </group>
  );
};

const About = () => {
  return (
    <div
      className='about-section'
      style={{
        position: 'relative',

        paddingTop: '5rem',
      }}
    >
      <Canvas
        style={{
          height: '45vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-900',
        }}
        colorManagement
        camera={{ position: [0, 100, 0], fov: 12 }}
      >
        <ambientLight castShadow intensity={0.5} />
        <directionalLight
          position={[0, 25, 0]}
          saturation={0.2}
          intensity={0.7}
        />

        <Model
          url='/3DLogos.glb'
          position={[0, 0, 0]}
          scale={[0.6, 0.6, 0.6]}
          args={[3, 2, 1]}
        />

        <OrbitControls rotateSpeed={0.5} enablePan={false} enableZoom={false} />
      </Canvas>

      <Grid container>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>

        <Grid item container xs={12} sm={10} md={10} lg={10} xl={8}>
          <Grid
            item
            container
            style={{
              margin: '0rem auto',
              width: '100%',
              backgroundColor: 'transparent',
            }}
          >
            <Grid item xs={12} md={6}>
              <AboutPic />
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutText />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};

export default About;
