import * as THREE from 'three';
import { Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import React from 'react';
import Camera from './Camera';

/**
 * @created 14/02/2022 - 16:58
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

// eslint-disable-next-line import/no-mutable-exports
export let perspectiveCamera: THREE.PerspectiveCamera;

const CameraElement = ({ position }: { position: Vector3 }): JSX.Element => {
  const divCanvas = document.getElementById('divCanvas');
  const canvas = divCanvas?.children[0] as HTMLCanvasElement;

  const { gl } = useThree();
  perspectiveCamera = Camera(canvas.width, canvas.height, position);
  gl.setSize(canvas.width, canvas.height);

  const scene = new THREE.Scene();
  scene.add(perspectiveCamera);
  return <primitive object={scene} />;
};

export default CameraElement;
