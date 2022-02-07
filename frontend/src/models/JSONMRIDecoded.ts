import { Vector3 } from './Vector3';
import { Matrix3 } from './Matrix3';

export class JSONMRIDecoded {
  size: Vector3;

  origin: Vector3;

  spacing: Vector3;

  direction: Matrix3;

  data: Float64Array;

  constructor(
    size: Vector3,
    origin: Vector3,
    spacing: Vector3,
    direction: Matrix3,
    data: Float64Array,
  ) {
    this.size = size;
    this.origin = origin;
    this.spacing = spacing;
    this.direction = direction;
    this.data = data;
  }
}
