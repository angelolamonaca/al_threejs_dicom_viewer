/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

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
