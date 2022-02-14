/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import { detectWheelDirection, mouseWheelDirection } from './mouseWheelEvent';

const mouse = {
  mouseWheelDirection,
  detectWheelDirection,
};

export { mouseWheelDirection, detectWheelDirection };

export default mouse;
