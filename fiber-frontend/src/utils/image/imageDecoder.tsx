/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

const fromBase64ToFloat64Array = (data: string): Float64Array => {
  const output = window.atob(data); // base64 decoding
  const array = new Float64Array(output.length / 2);

  for (let i = 0; i < array.length; i++) {
    array[i] = output.charCodeAt(2 * i) | (output.charCodeAt(2 * i + 1) << 8);
  }
  return array;
};

export default fromBase64ToFloat64Array;
