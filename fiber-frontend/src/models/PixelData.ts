import * as THREE from 'three';
import { store } from '../redux/store';
import scale from '../utils/pixelMatrix/scale';

export class PixelData extends Array {
  constructor(pixelData?: [[]]) {
    super(0);
    this.push(pixelData);
  }

  static toTexture(pixelData: PixelData, scaleToApply: Array<number>): THREE.DataTexture {
    const visibility = store.getState().visibility;

    const rgbaPixelData = new Uint8Array(
      4 * pixelData.length * pixelData.length,
    );
    let i = 0;
    for (let x = pixelData.length - 1; x >= 0; x--) {
      for (let y = 0; y < pixelData.length; y++) {
        const r = scale('r', visibility, pixelData[x][y], scaleToApply);
        rgbaPixelData[i] = r;
        i++;

        const g = scale('g', visibility, pixelData[x][y], scaleToApply);
        rgbaPixelData[i] = g;
        i++;

        const b = scale('b', visibility, pixelData[x][y], scaleToApply);
        rgbaPixelData[i] = b;
        i++;

        const a = 1;
        rgbaPixelData[i++] = a;
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
