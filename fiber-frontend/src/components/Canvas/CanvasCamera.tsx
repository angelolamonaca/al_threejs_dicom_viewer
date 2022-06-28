import * as THREE from 'three';
import { Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import React from 'react';
import Camera from '../../models/Camera';

const CanvasCamera = ({ position }: { position: Vector3 }): JSX.Element => {
  const divCanvas = document.getElementById('divCanvas');
  const canvas = divCanvas?.children[0] as HTMLCanvasElement;

  const {
    gl,
    camera,
  } = useThree();
  const perspectiveCamera = Camera.getCamera(
    camera,
    canvas.width,
    canvas.height,
    position,
  );
  gl.setSize(canvas.width, canvas.height);

  const scene = new THREE.Scene();
  scene.add(perspectiveCamera);
  return <primitive object={scene} />;
};

export default CanvasCamera;
