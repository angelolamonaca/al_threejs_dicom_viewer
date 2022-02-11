import axios from 'axios';
import { JSONMRI } from '../models/JSONMRI';

const LOCALHOST = 'http://localhost';

export const getLocalJson = async (url: string): Promise<JSONMRI> => {
  const response = await axios.get(url);
  return response.data;
};

export const getImageFromDicomConverterApi = async (
  imgId: string,
): Promise<any> => {
  const response = await axios.get(
    `${LOCALHOST}:8000/case4d/${imgId}?output_type=json`,
  );
  return response.data;
};
