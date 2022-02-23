import * as THREE from 'three';

/**
 * @created 14/02/2022 - 17:34
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

export class PixelData extends Array {
  constructor(pixelData?: [[]]) {
    super(0);
    this.push(pixelData);
  }

  static toTexture(pixelData: PixelData, contrastToApply: number): THREE.DataTexture {
    const rgbaPixelData = new Uint8Array(
      4 * pixelData.length * pixelData.length,
    );
    let i = 0;
    for (let x = pixelData.length - 1; x >= 0; x--) {
      for (let y = 0; y < pixelData.length; y++) {
        const r = pixelData[x][y] > 0 ? pixelData[x][y] + contrastToApply : 0;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = r < 0 ? 0 : r >= 255 ? 255 : r;
        i++;
        const g = pixelData[x][y] > 0 ? pixelData[x][y] + contrastToApply : 0;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = g < 0 ? 0 : g >= 255 ? 255 : g;
        i++;
        const b = pixelData[x][y] > 0 ? pixelData[x][y] + contrastToApply : 0;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = b < 0 ? 0 : b >= 255 ? 255 : b;
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
