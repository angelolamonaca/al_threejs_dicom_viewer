import { PixelData } from './PixelData';

export class JsonDcm {
  pixelData?: PixelData;

  metadata?: JSON;

  constructor(pixelData?: PixelData, metadata?: JSON) {
    this.pixelData = pixelData;
    if (metadata) {
      this.metadata = metadata;
    }
  }
}
