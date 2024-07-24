import ReactDOM from 'react-dom';
import React, { FC, useEffect } from 'react';
import styles from './modal.module.css';
import { IoClose } from 'react-icons/io5';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const modalRoot: HTMLElement | null = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  // закрытие модального окна при клике на Esc
  useEffect(() => {
    const closeEscModal: (evt: KeyboardEvent) => void = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeEscModal);

    return () => {
      document.removeEventListener('keydown', closeEscModal);
    };
  }, [onClose]);

  // если модальное окно не открыто, то возвращаем null
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <IoClose className={styles.modalClose} onClick={onClose} />
        <div>{children}</div>
      </div>
    </>,
    modalRoot as HTMLElement,
  );
};

export default Modal;
