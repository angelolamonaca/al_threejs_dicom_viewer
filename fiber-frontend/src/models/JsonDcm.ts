/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import * as THREE from 'three';

export class JsonDcm {
  pixelData: [[]];

  metadata?: JSON;

  constructor(pixelData: [[]], metadata?: JSON) {
    this.pixelData = pixelData;
    if (metadata) {
      this.metadata = metadata;
    }
  }

  getPixelDataAsThreeDataTexture(): THREE.DataTexture {
    const rgbaPixelData = new Uint8Array(
      4 * this.pixelData.length * this.pixelData.length,
    );
    let i = 0;
    for (let x = this.pixelData.length - 1; x >= 0; x--) {
      for (let y = 0; y < this.pixelData.length; y++) {
        rgbaPixelData[i++] = this.pixelData[x][y];
        rgbaPixelData[i++] = this.pixelData[x][y];
        rgbaPixelData[i++] = this.pixelData[x][y];
        rgbaPixelData[i++] = 255;
      }
    }
    const dataTexture = new THREE.DataTexture(
      rgbaPixelData,
      this.pixelData.length,
      this.pixelData.length,
      THREE.RGBAFormat,
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
  }
}
