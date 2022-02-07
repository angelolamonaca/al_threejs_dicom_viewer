import { imageDecoder, imageLoader } from './image';

const utils = {
  imageLoader,
  imageExtractor: imageDecoder
};

export {
  imageLoader,
  imageDecoder
};

export default utils;
