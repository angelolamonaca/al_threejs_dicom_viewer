/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import axios from 'axios';
import { CustomJsonDcm } from '../models/CustomJsonDcm';
import { JsonDcm } from '../models/JsonDcm';

const LOCALHOST = 'http://localhost';

export const getLocalJson = async (url: string): Promise<CustomJsonDcm> => {
  const response = await axios.get(url);
  return response.data;
};

export const getImageFromDicomConverterApi = async (
  imgId: string,
  withMetadata: boolean,
): Promise<JsonDcm> => {
  const response = await axios.get(
    `${LOCALHOST}:8000/case4d/${imgId}
    ?output_type=json
    &with_metadata=${withMetadata}`,
  );
  return response.data;
};
