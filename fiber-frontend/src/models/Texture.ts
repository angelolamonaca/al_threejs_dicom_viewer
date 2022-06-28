import { DataTexture } from 'three';
import { PixelData } from './PixelData';

export class Texture {
  static scaleToApply = [0, 3570];

  static getDataTexture(pixelData: PixelData): DataTexture {
    return PixelData.toTexture(pixelData, this.scaleToApply);
  }
}
