import { ThreeEvent } from '@react-three/fiber';
import {
  detectWheelDirection,
  mouseWheelDirection,
} from '../../../utils/mouse';
import { zeroPad } from '../../../utils/math';

/**
 * @created 14/02/2022 - 17:06
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

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
