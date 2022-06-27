import * as THREE from 'three';
import { store } from '../redux/store';

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
    const {
      airVisible,
      fatVisible,
      boneVisible,
    } = store.getState().visibility;
    console.log(airVisible);
    console.log(fatVisible);
    console.log(boneVisible);

    const backgroundColor = {
      r: 171,
      g: 204,
      b: 255,
    };

    const rgbaPixelData = new Uint8Array(
      4 * pixelData.length * pixelData.length,
    );
    let i = 0;
    for (let x = pixelData.length - 1; x >= 0; x--) {
      for (let y = 0; y < pixelData.length; y++) {
        const r = pixelData[x][y] + contrastToApply;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = r < 0 ? 0 : r >= 255 ? 255 : r;
        if (!airVisible && r < 10) {
          rgbaPixelData[i] = backgroundColor.r;
        }
        if (!fatVisible && (r >= 10 && r < 25)) {
          rgbaPixelData[i] = backgroundColor.r;
        }
        if (!boneVisible && r >= 25) {
          rgbaPixelData[i] = backgroundColor.r;
        }
        i++;

        const g = pixelData[x][y] + contrastToApply;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = g < 0 ? 0 : g >= 255 ? 255 : g;
        if (!airVisible && g < 10) {
          rgbaPixelData[i] = backgroundColor.g;
        }
        if (!fatVisible && (g >= 10 && g < 25)) {
          rgbaPixelData[i] = backgroundColor.g;
        }
        if (!boneVisible && g >= 25) {
          rgbaPixelData[i] = backgroundColor.g;
        }
        i++;

        const b = pixelData[x][y] + contrastToApply;
        // eslint-disable-next-line no-nested-ternary
        rgbaPixelData[i] = b < 0 ? 0 : b >= 255 ? 255 : b;
        if (!airVisible && b < 10) {
          rgbaPixelData[i] = backgroundColor.b;
        }
        if (!fatVisible && (b >= 10 && b < 25)) {
          rgbaPixelData[i] = backgroundColor.b;
        }
        if (!boneVisible && b >= 25) {
          rgbaPixelData[i] = backgroundColor.b;
        }
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
