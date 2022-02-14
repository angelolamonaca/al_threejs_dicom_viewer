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
    `${LOCALHOST}:8000/case4d/${imgId}?output_type=json&with_metadata=${withMetadata}`,
  );
  return response.data;
};
