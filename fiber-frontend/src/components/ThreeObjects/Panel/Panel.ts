import * as THREE from 'three';
import { Vector3 } from 'three';
import { PixelData } from '../../../models/PixelData';

/**
 * @created 18/02/2022 - 09:47
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 18/02/2022
 */

const Panel = (size: Vector3, pixelData: PixelData): THREE.Scene => {
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const dataTexture = PixelData.toTexture(pixelData);

  const material = new THREE.MeshBasicMaterial({ map: dataTexture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  return scene;
};

export default Panel;
