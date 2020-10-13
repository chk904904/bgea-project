import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Slogan() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 5000 } });
  return (
    <animated.div
      style={{
        ...props,
        height: '90vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem',
      }}
    >
      <h1>Nothing about us, without us.</h1>
    </animated.div>
  );
}
