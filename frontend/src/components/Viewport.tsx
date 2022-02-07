import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
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
  const [imgId, setImgId] = useState('008');

  // Rotate mesh every frame, this is outside of React without overhead
  /* useFrame(() => {
    if (ref.current) ref.current.rotation.x += 0.01;
  }); */

  const texture = new THREE.TextureLoader().load(
    `http://localhost:8000/img/${imgId}`,
  );

  const zeroPad = (num: number, places: number): string =>
    String(num)
      .padStart(places, '0');

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
            console.log(zeroPad(5, 2)); // "05"
            setImgId(zeroPad(parseInt(imgId, 10) + 1, 3));
            break;
          case mouseWheelDirection.DOWN:
            console.log('Scrolling DOWN');
            break;
          default:
            console.log('No Scrolling');
        }
      }}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Viewport = (): JSX.Element => (
  <Canvas style={{ height: window.innerHeight }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[0, 0, 0]} />
  </Canvas>
);

export default Viewport;
