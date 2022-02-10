import * as THREE from 'three';
import { Vector3 } from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber';
import { detectWheelDirection, mouseWheelDirection } from '../utils/mouse';
import { zeroPad } from '../utils/math';

const Camera = ({ position }: { position: Vector3 }): JSX.Element => {
  const scene = new THREE.Scene();
  const { camera } = useThree();
  camera.position.set(position.x, position.y, position.z);
  scene.add(camera);
  return <primitive position={scene} object={camera} />;
};

const Cube = ({
  position,
  size,
}: {
  position: Vector3;
  size: Vector3;
}): JSX.Element => {
  const [imgId, setImgId] = useState('000');

  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const texture = new THREE.TextureLoader().load(
    `http://localhost:8000/case4d/${imgId}?output_type=png`,
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return (
    <primitive
      position={position}
      object={scene}
      onWheel={(event: ThreeEvent<WheelEvent> | WheelEvent) => {
        const scrollDirection = detectWheelDirection(event);
        switch (scrollDirection) {
          case mouseWheelDirection.UP:
            setImgId(zeroPad(parseInt(imgId, 10) + 1, 3));
            break;
          case mouseWheelDirection.DOWN:
            setImgId(zeroPad(parseInt(imgId, 10) - 1, 3));
            break;
          default:
            console.log('No Scrolling');
        }
      }}
    />
  );
};

const Box = ({
  position,
  size,
}: {
  position: Vector3;
  size: Vector3;
}): JSX.Element => {
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
    `http://localhost:8000/case1/${imgId}?output_type=png`,
  );

  return (
    <mesh
      ref={ref}
      position={position}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      onWheel={(event: ThreeEvent<WheelEvent> | WheelEvent) => {
        const scrollDirection = detectWheelDirection(event);
        switch (scrollDirection) {
          case mouseWheelDirection.UP:
            setImgId(zeroPad(parseInt(imgId, 10) + 2, 3));
            break;
          case mouseWheelDirection.DOWN:
            setImgId(zeroPad(parseInt(imgId, 10) - 2, 3));
            break;
          default:
            console.log('No Scrolling');
        }
      }}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <boxGeometry args={[size.x, size.y, size.z]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Viewport = (): JSX.Element => (
  <Canvas>
    <Camera position={new Vector3(5, 5, 5)} />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={new Vector3(-3, 0, 0)} size={new Vector3(4, 4, 0.1)} />
    <Cube position={new Vector3(3, 0, 0)} size={new Vector3(4, 4, 0.1)} />
  </Canvas>
);

export default Viewport;
