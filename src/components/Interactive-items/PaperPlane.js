import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import clickSfx from '../../sound/click.wav';
import hoverSfx from '../../sound/hover.ogg';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Car(props) {
  const [play] = useSound(clickSfx);
  const [hover] = useSound(hoverSfx);
  const { clickAction } = props;
  const [AnimationProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const handleClick = () => {
    play();
    clickAction();
  };

  return (
    <animated.div
      className="box"
      onMouseEnter={hover}
      onClick={handleClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: AnimationProps.xys.interpolate(trans), top: '-90vh', left: '32vw' }}
    >
      <img src="./imgs/paperplane.png" alt="Paper Plane" style={{ width: 100, userSelect: 'none' }} />
    </animated.div>
  );
}
