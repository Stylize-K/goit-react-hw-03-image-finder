import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {};
