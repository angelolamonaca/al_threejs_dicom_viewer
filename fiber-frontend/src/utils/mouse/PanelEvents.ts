import { ThreeEvent } from '@react-three/fiber';
import { detectWheelDirection, mouseWheelDirection } from './index';
import { zeroPad } from '../math';

export const panelScrollHandler = (
  event: ThreeEvent<WheelEvent> | WheelEvent,
  imgId: string,
): string => {
  const scrollDirection = detectWheelDirection(event);
  switch (scrollDirection) {
    case mouseWheelDirection.UP:
      return zeroPad(parseInt(imgId, 10) + 1, 3);
    case mouseWheelDirection.DOWN:
      return zeroPad(parseInt(imgId, 10) - 1, 3);
    default:
      return '000';
  }
};
