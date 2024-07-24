import React, { FC } from 'react';
import styles from './modalOverlay.module.css';

interface ModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
  return <div className={styles.modal_overlay} onClick={onClose}></div>;
};

export default ModalOverlay;
