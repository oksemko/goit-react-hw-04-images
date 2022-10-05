import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';


export const ImageGallery = ({ data, onClick }) => {
  const imageClick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    onClick(Number(event.target.dataset.id));
  };

  return (
    <>
      <ul className={styles.ImageGallery} onClick={imageClick}>
        <ImageGalleryItem images={data} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
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
