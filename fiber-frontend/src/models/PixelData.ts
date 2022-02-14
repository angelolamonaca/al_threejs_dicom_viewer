/**
 * @created 14/02/2022/02/2022 - 17:34
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

export class PixelData extends Array {
  constructor(pixelData: [[]]) {
    super(0);
    this.push(pixelData);
  }
}
