import {
  VisibilityState,
} from '../../redux/features/visibility/visibilityHandler';

export default (
  color: string,
  visibility: VisibilityState,
  value: number,
  originalRange: Array<number>,
  finalRange: Array<number> = [0, 255],
): number => {
  if (value < originalRange[0]) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  if (value > originalRange[1]) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  if (!visibility.airVisible && value < 230) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  if (!visibility.waterVisible && value >= 230 && value < 500) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  if (!visibility.tissuesVisible && value >= 500 && value < 1000) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  if (!visibility.boneVisible && value >= 1000) {
    switch (color) {
      case 'r':
        return 50;
      case 'g':
        return 70;
      case 'b':
        return 130;
      default:
        return 0;
    }
  }
  // eslint-disable-next-line no-mixed-operators,max-len
  return (value - originalRange[0]) * (finalRange[1] - finalRange[0]) / (originalRange[1] - originalRange[0]) + finalRange[0];
};
