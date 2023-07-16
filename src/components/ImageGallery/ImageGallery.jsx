import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = props => {
  return (
    <ul class={css.imageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

ImageGallery.propTypes = {};
