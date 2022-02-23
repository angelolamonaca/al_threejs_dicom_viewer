import { DataTexture } from 'three';
import { PixelData } from '../../../../models/PixelData';

/**
 * @project al_threejs_dicom_viewer
 * @created 23/02/2022 - 11:15
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

export class Texture {
  static contrastToApply = 0;

  static getDataTexture(pixelData: PixelData): DataTexture {
    return PixelData.toTexture(pixelData, this.contrastToApply);
  }
}
