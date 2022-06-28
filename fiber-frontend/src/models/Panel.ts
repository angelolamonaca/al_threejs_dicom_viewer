import * as THREE from 'three';
import { Vector3 } from 'three';
import { PixelData } from './PixelData';
import { Texture } from './Texture';

const Panel = (size: Vector3, pixelData: PixelData): THREE.Scene => {
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const dataTexture = Texture.getDataTexture(pixelData);

  const material = new THREE.MeshBasicMaterial({ map: dataTexture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  return scene;
};

export default Panel;
