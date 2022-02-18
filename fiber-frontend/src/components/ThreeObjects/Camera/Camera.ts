import * as THREE from 'three';
import { PerspectiveCamera, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';

/**
 * @created 18/02/2022 - 09:42
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 18/02/2022
 */

const Camera = (
  canvasWidth: number,
  canvasHeight: number,
  position: Vector3,
): THREE.PerspectiveCamera => {
  const { camera } = useThree();
  const perspectiveCamera = camera as PerspectiveCamera;
  perspectiveCamera.aspect = canvasWidth / canvasHeight;
  perspectiveCamera.updateProjectionMatrix();
  perspectiveCamera.position.set(position.x, position.y, position.z);

  return perspectiveCamera;
};

export default Camera;
