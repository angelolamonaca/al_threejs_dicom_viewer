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
    const textureData = new Uint8Array(4 * 255 * 255);
    for (let i = 0; i < this.pixelData.length; i++) {
      for (let j = 0; j < this.pixelData.length; j++) {
        const stride = (i * 255 + j) * 4;
        textureData[stride] = this.pixelData[i][j];
        textureData[stride + 1] = this.pixelData[i][j];
        textureData[stride + 2] = this.pixelData[i][j];
        textureData[stride + 3] = 255;
      }
    }
    const dataTexture = new THREE.DataTexture(
      textureData,
      255,
      255,
      THREE.RGBAFormat,
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
  }
}
