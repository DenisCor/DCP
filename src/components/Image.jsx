import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import '../App.scss';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(0px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Image = () => {
  const [props, set] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 6, tension: 1600, friction: 50 },
    };
  });

  return (
    <animated.img
      src='../DCpic.png'
      alt='Denis Corlotean picture'
      className='dc-image'
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
};

export default Image;
