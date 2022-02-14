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
    for (let x = 0; x < this.pixelData.length; x++) {
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
