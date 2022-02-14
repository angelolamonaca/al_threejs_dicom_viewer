/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

export class Frame {
  width: number;

  height: number;

  depth: number;

  slice: Float64Array;

  constructor(
    width: number,
    height: number,
    depth: number,
    slice: Float64Array,
  ) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.slice = slice;
  }
}
