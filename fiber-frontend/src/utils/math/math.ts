/**
 * @created 14/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

const zeroPad = (num: number, places: number): string =>
  String(num)
    .padStart(places, '0');

export default zeroPad;
