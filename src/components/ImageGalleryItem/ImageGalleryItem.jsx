import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, src, alt }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id}>
        <img
          className={styles.ImageGalleryItemImage}
          src={src}
          alt={alt}
          data-id={id}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ),
}
