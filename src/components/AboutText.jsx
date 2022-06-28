import React, { useRef, Suspense, useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, draco } from 'drei';
import { EffectComposer, Bloom, Glitch } from 'react-postprocessing';
import Fade from 'react-reveal/Fade';

const Model = ({ url, ...props }) => {
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, url, draco());
  const scene = useMemo(() => gltf.scene.clone(true), []);
  useFrame(() => (mesh.current.rotation.z -= 0.01));
  useFrame(() => (mesh.current.rotation.y -= 0.001));
  useFrame(() => (mesh.current.rotation.x -= 0.002));

  return (
    <group {...props}>
      <mesh ref={mesh}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

const useStyles = makeStyles(() => ({
  fontSizeM: {
    color: 'white',
    padding: '0 1rem',
    textAlign: 'justify',
  },
}));

const AboutText = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.fontSizeM} direction='column'>
      <Grid item className='fontS'>
        <Fade right>
          <p>
            Hey! My name is Denis and I`m a self-taught web developer based in
            Edinburgh, Scotland. My programming journey started few years ago
            with C#, but eventually JavaScript took over. When it comes to
            frameworks or libraries hands down React is my favorite, I was lucky
            enough to start learning React after hooks were introduced, that`s
            when I shifted from object-oriented to functional programming.
            Although I put more time and effort into front-end development,
            curiosity found its way into the back-end side as well, just so I
            can have a better understanding of both worlds. One of my aspiring
            goals is to expand my knowledge in this direction as well. My skills set
            consists of many technologies that are important in today`s web
            application building process, varying from UI building tools, front
            and back-end technologies, animations and even creating 3D meshes.
            Mobile app development also intrigues me, especially being able to
            easily transition to React-Native, but currently that`s out of my
            scope. I look forward to new challenges and career opportunities,
            learn from others, acquire experience and grow as a developer.
          </p>
        </Fade>
        <h4 className='contact-h4'>SKILLS:</h4>
      </Grid>
      <Grid item>
        <Canvas
          style={{ height: '50vh', width: 'auto', cursor: 'pointer' }}
          colorManagement
          camera={{ position: [0, 100, 0], fov: 12 }}
        >
          <EffectComposer>
            <Bloom intensity={0.2} />
            <Glitch />
          </EffectComposer>
          <ambientLight castShadow intensity={0.5} />
          <directionalLight
            position={[1, 25, 0]}
            saturation={0.2}
            intensity={0.7}
          />
           <pointLight position={[0, -10, 0]} intensity={0.1} />
          <pointLight position={[0, 0, 100]} intensity={0.6} /> 
          <pointLight position={[100, 0, 0]} intensity={0.6} />
          <Suspense fallback={null}>
            <Model
              url='/3DLogos.glb'
              position={[0, 0, 0]}
              scale={[2.8, 2.8, 2.8]}
              args={[3, 2, 1]}
            />
          </Suspense>
          <OrbitControls
            rotateSpeed={0.5}
            enablePan={false}
            enableZoom={false}
          />
        </Canvas>
      </Grid>
    </Grid>
  );
};

// const Loader = () => {
//   return (
//     <>
//       <div
//         style={{
//           width: 'auto',
//           height: '50vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <img style={{ height: '5rem' }} src='/DCLoader2.gif' />
//         <p style={{ textAlign: 'center' }}>Loading 3D Mesh...</p>
//       </div>
//     </>
//   );
// };

export default AboutText;
