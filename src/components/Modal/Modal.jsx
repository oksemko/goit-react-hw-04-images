import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';


const modalRoot = document.querySelector('#modal-root');

export function Modal ({ onClose, children }) {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);


    return createPortal(
      <div className={styles.Overlay} onClick={handleOverlayClick}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
};


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}
