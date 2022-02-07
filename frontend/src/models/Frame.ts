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