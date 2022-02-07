import axios from 'axios';
import { JSONMRI } from '../models/JSONMRI';

const getLocalJson = async (url: string): Promise<JSONMRI> => {
  const response = await axios.get(url);
  return response.data;
};

export default getLocalJson;
