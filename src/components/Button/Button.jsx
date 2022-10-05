import PropTypes from 'prop-types';

import styles from './Button.module.css';


export const Button = ({ onClick }) => {
  return (
    <div className={styles.Loading}>
    <button type="button" className={styles.Button} onClick={onClick}>
      Load More
      </button>
      </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
