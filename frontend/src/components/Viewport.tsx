import * as THREE from 'three';
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Viewport = (props: JSX.IntrinsicElements['mesh']): any => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // eslint-disable-next-line no-return-assign
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Viewport position={[-1.2, 0, 0]} />
    <Viewport position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById('root'),
);

export default Viewport;
