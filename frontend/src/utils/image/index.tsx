import imageLoader from './imageLoader';
import imageDecoder from './imageDecoder';

const image = {
  imageLoader,
  imageExtractor: imageDecoder,
};

export { imageLoader, imageDecoder };

export default image;
