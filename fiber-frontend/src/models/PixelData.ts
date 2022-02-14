import * as THREE from 'three';

/**
 * @created 14/02/2022/02/2022 - 17:34
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

export class PixelData extends Array {
  constructor(pixelData?: [[]]) {
    super(0);
    this.push(pixelData);
  }

  static toTexture(pixelData: PixelData): THREE.DataTexture {
    const rgbaPixelData = new Uint8Array(
      4 * pixelData.length * pixelData.length,
    );
    let i = 0;
    for (let x = pixelData.length - 1; x >= 0; x--) {
      for (let y = 0; y < pixelData.length; y++) {
        rgbaPixelData[i++] = pixelData[x][y];
        rgbaPixelData[i++] = pixelData[x][y];
        rgbaPixelData[i++] = pixelData[x][y];
        rgbaPixelData[i++] = 255;
      }
    }
    const dataTexture = new THREE.DataTexture(
      rgbaPixelData,
      pixelData.length,
      pixelData.length,
      THREE.RGBAFormat,
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
  }
}
