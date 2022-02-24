import * as THREE from 'three';
import { PerspectiveCamera, Vector3 } from 'three';

/**
 * @created 18/02/2022 - 09:42
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 18/02/2022
 */

class Camera {
  static perspectiveCamera: THREE.PerspectiveCamera;

  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
  private constructor() {
  }

  public static getCamera(
    camera?: THREE.Camera,
    canvasWidth?: number,
    canvasHeight?: number,
    position?: Vector3,
  ): THREE.PerspectiveCamera {
    if (!Camera.perspectiveCamera) {
      Camera.perspectiveCamera = camera as PerspectiveCamera;

      if (canvasWidth && canvasHeight) {
        Camera.perspectiveCamera.aspect = canvasWidth / canvasHeight;
      }
      if (position) {
        Camera.perspectiveCamera.position.set(
          position.x,
          position.y,
          position.z,
        );
      }

      Camera.perspectiveCamera.updateProjectionMatrix();
    }

    return Camera.perspectiveCamera;
  }

  static setZoom(value: number): void {
    Camera.perspectiveCamera.zoom = value as number;
    Camera.perspectiveCamera.updateProjectionMatrix();
  }
}

export default Camera;
