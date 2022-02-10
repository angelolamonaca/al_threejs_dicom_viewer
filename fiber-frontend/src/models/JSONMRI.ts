import { Frame } from './Frame';
import fromBase64ToFloat64Array from '../utils/image/imageDecoder';
import { JSONMRIDecoded } from './JSONMRIDecoded';
import { Vector3 } from './Vector3';
import { Matrix3 } from './Matrix3';

export class JSONMRI {
  size: Vector3;

  origin: Vector3;

  spacing: Vector3;

  direction: Matrix3;

  data: string;

  constructor(
    size: Vector3,
    origin: Vector3,
    spacing: Vector3,
    direction: Matrix3,
    data: string,
  ) {
    this.size = size;
    this.origin = origin;
    this.spacing = spacing;
    this.direction = direction;
    this.data = data;
  }

  getFrame(z: number): Frame {
    const frame = new Frame(
      this.size[0],
      this.size[1],
      this.size[2],
      new Float64Array(this.size[0] * this.size[1]),
    );

    const decodedData: Float64Array = fromBase64ToFloat64Array(this.data);

    const jsonMriDecoded: JSONMRIDecoded = new JSONMRIDecoded(
      this.size,
      this.origin,
      this.spacing,
      this.direction,
      decodedData,
    );

    for (let y = 0; y < frame.height; y++) {
      for (let x = 0; x < frame.width; x++) {
        frame.slice[y * frame.width + x] =
          jsonMriDecoded.data[(z * frame.height + y) * frame.width + x];
      }
    }

    return frame;
  }
}
