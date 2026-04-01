import { ImageLoader } from 'next/image';

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  const q = quality || 75; 
  return `${src}?w=${width}&q=${q}`; 
};

export default imageLoader;