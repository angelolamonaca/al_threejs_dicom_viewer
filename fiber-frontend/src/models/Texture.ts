import { DataTexture } from 'three';
import { PixelData } from './PixelData';

/**
 * @project al_threejs_dicom_viewer
 * @created 23/02/2022 - 11:15
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

export class Texture {
  static scaleToApply = [0, 3570];

  static getDataTexture(pixelData: PixelData): DataTexture {
    return PixelData.toTexture(pixelData, this.scaleToApply);
  }
}
