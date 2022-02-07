import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import {
  detectWheelDirection,
  mouseWheelDirection,
} from '../utils/mouse/mouseWheelEvent';

const Box = (props: JSX.IntrinsicElements['mesh']): JSX.Element => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null);

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (ref.current) ref.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      onWheel={(event: ThreeEvent<WheelEvent> | WheelEvent) => {
        const scrollDirection = detectWheelDirection(event);
        switch (scrollDirection) {
          case mouseWheelDirection.UP:
            console.log('Scrolling UP');
            break;
          case mouseWheelDirection.DOWN:
            console.log('Scrolling DOWN');
            break;
          default:
            console.log('No Scrolling');
        }
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Viewport = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);

export default Viewport;
