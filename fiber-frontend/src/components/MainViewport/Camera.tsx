import * as THREE from 'three';
import { PerspectiveCamera, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import React from 'react';

/**
 * @created 14/02/2022/02/2022 - 16:58
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

// eslint-disable-next-line import/no-mutable-exports
export let perspectiveCamera: THREE.PerspectiveCamera;

const Camera = ({ position }: { position: Vector3 }): JSX.Element => {
  const divCanvas = document.getElementById('divCanvas');
  const canvas = divCanvas?.children[0] as HTMLCanvasElement;

  const { camera, gl } = useThree();
  perspectiveCamera = camera as PerspectiveCamera;
  perspectiveCamera.aspect = canvas.width / canvas.height;
  perspectiveCamera.updateProjectionMatrix();
  perspectiveCamera.position.set(position.x, position.y, position.z);
  gl.setSize(canvas.width, canvas.height);

  const scene = new THREE.Scene();
  scene.add(perspectiveCamera);
  return <primitive object={scene} />;
};

export default Camera;
