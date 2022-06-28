import { VisibilityState } from '../../redux/features/visibility/visibilityHandler';

const assignBackgroundColor = (color: string): number => {
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
};

export default (
  color: string,
  visibility: VisibilityState,
  value: number,
  originalRange: Array<number>,
  finalRange: Array<number> = [0, 255],
): number => {
  if (value < originalRange[0] || value > originalRange[1]) {
    return assignBackgroundColor(color);
  }

  if (!visibility.airVisible && value < 230) {
    return assignBackgroundColor(color);
  }
  if (!visibility.waterVisible && value >= 230 && value < 500) {
    return assignBackgroundColor(color);
  }
  if (!visibility.tissuesVisible && value >= 500 && value < 1000) {
    return assignBackgroundColor(color);
  }
  if (!visibility.boneVisible && value >= 1000) {
    return assignBackgroundColor(color);
  }

  return (value - originalRange[0]) * (finalRange[1] - finalRange[0])
        / (originalRange[1] - originalRange[0])
        + finalRange[0];
};
