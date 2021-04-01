import React, {
  useRef,
  Suspense,
  useMemo,
  Fragment,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';
import './App.scss';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, draco, Stars } from 'drei';
import { EffectComposer, Bloom, Glitch } from 'react-postprocessing';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Designs from './pages/Designs';
import Contact from './pages/Contact';
import { Element } from 'react-scroll';
import Loader from './pages/Loader';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AnimatedCursor from 'react-animated-cursor';

const Model = ({ url, ...props }) => {
  const mesh = useRef(null);
  const meshS = useRef(null);
  const gltf = useLoader(GLTFLoader, url, draco());
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  useFrame(() => (mesh.current.rotation.z += 0.009));
  useFrame(() => (mesh.current.rotation.y += 0.002));
  useFrame(() => (meshS.current.rotation.z += -0.0005));
  return (
    <group {...props}>
      <mesh ref={mesh}>
        <primitive object={scene} />
      </mesh>
      <Stars
        ref={meshS}
        radius={10}
        depth={50}
        count={3000}
        factor={1}
        saturation={1000}
        fade
      />
    </group>
  );
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const matchesMobile = useMediaQuery('(max-width:480px)');

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  useLayoutEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  // useLayoutEffect(() => {
  //   // do side effects
  //   return setLoading(true);
  //   // return () => /* cleanup */
  // }, [isLoading]);

  // useEffect(() => {
  //   return setLoading(false);
  // }, [isLoading]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color='226, 113, 111'
          // color='255, 255, 255'
          outerAlpha={0.08}
          innerScale={0.7}
          outerScale={8}
        /> */}

        <Element name='Navbar'>
          <Navbar />
        </Element>

        <Canvas colorManagement camera={{ position: [0, 100, 0], fov: 12 }}>
          <EffectComposer>
            <Bloom intensity={0.2} />
            <Glitch />
          </EffectComposer>
          <ambientLight castShadow intensity={0.5} />
          <directionalLight
            position={[0, 25, 0]}
            saturation={0.2}
            intensity={0.7}
          />
          <pointLight position={[-10, -10, 10]} intensity={0.8} />
          <pointLight position={[10, 20, -10]} intensity={0.6} />
          <pointLight position={[0, -10, 0]} intensity={0.4} />
          <Suspense fallback={null}>
            <Model
              url='/DCLogoMesh.glb'
              position={[0, 0, 0]}
              scale={[0.6, 0.6, 0.6]}
              args={[3, 2, 1]}
            />
          </Suspense>
          {!matchesMobile && (
            <OrbitControls
              rotateSpeed={0.5}
              enablePan={false}
              enableZoom={false}
            />
          )}
        </Canvas>
        <div className='pages-container'>
          <div className='content-wrap'>
            <Element name='About'>
              <About />
            </Element>
            <Element name='Projects'>
              <Projects />
            </Element>

            <Element name='Designs'>
              <Designs />
            </Element>
            <Element name='Contact'>
              <Contact />
            </Element>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
