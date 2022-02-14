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
    for (let x = 0; x < this.pixelData.length; x++) {
      for (let y = 0; y < this.pixelData.length; y++) {
        const stride = (x * 255 + y) * 4;
        rgbaPixelData[stride] = this.pixelData[x][y];
        rgbaPixelData[stride + 1] = this.pixelData[x][y];
        rgbaPixelData[stride + 2] = this.pixelData[x][y];
        rgbaPixelData[stride + 3] = 255;
      }
    }
    const dataTexture = new THREE.DataTexture(
      rgbaPixelData,
      255,
      255,
      THREE.RGBAFormat,
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
  }
}
