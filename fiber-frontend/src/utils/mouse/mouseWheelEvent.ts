import { ThreeEvent } from '@react-three/fiber';

export enum mouseWheelDirection {
  'UP',
  'DOWN',
}

export const detectWheelDirection = (
  e: WheelEvent | ThreeEvent<WheelEvent>,
): mouseWheelDirection => {
  if ('deltaY' in e && e.deltaY < 0) {
    return mouseWheelDirection.UP;
  }
  return mouseWheelDirection.DOWN;
};

export default {
  mouseWheelDirection,
  detectWheelDirection,
};
