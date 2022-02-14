/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import { ThreeEvent } from '@react-three/fiber';

export enum mouseWheelDirection {
  'UP',
  'DOWN',
}

export const detectWheelDirection = (
  e: WheelEvent | ThreeEvent<WheelEvent>,
): mouseWheelDirection => {
  if ('deltaY' in e && e.deltaY < 0) {
    // Scrolling Up
    return mouseWheelDirection.UP;
  }
  // Scrolling down
  return mouseWheelDirection.DOWN;
};

export default {
  mouseWheelDirection,
  detectWheelDirection,
};
