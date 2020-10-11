import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import clickSfx from '../click.wav';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function InteractiveItem(props) {
  const [play] = useSound(clickSfx);
  const { clickAction } = props;
  const [AnimationProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const handleClick = () => {
    play();
    clickAction();
  };

  return (
    <animated.div
      className="box"
      onClick={handleClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: AnimationProps.xys.interpolate(trans) }}
    >
      Interactive Item
    </animated.div>
  );
}
