import axios from 'axios';
import { JSONMRI } from '../models/JSONMRI';

const LOCALHOST = 'http://localhost';

const getLocalJson = async (url: string): Promise<JSONMRI> => {
  const response = await axios.get(url);
  return response.data;
};

const getImageFromDicomConverterApi = async (imgId: string): Promise<any> => {
  const response = await axios.get(`${LOCALHOST}:8000/img/008`);
  return response.data;
};

export default getLocalJson;
