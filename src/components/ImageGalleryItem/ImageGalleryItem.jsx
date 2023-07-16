import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = props => {
  return (
    <li class={css.imageGalleryItem}>
      <img className={css.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {};
