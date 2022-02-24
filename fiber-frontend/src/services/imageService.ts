/**
 * @created 14/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import axios from 'axios';
import { JsonDcm } from '../models/JsonDcm';

const LOCALHOST = 'http://localhost';
const PORT = '8000';

export const getImageFromDicomConverterApi = async (
  imgId: string,
  withMetadata: boolean,
): Promise<JsonDcm> => {
  const url = new URL(`${LOCALHOST}:${PORT}/case4d/${imgId}`);
  url.searchParams.append('output_type', 'json');
  url.searchParams.append('with_metadata', String(withMetadata));
  const response = await axios.get(url.href);
  return response.data;
};
