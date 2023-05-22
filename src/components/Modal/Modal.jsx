import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { CrossIcon } from '../../components/utils/icons';
import { Backdrop, ModalWindow, CloseBtn } from './Modal.styled';

const modalContainer = document.getElementById('modal-root');

const Modal = ({ toggleModal, children }) => {
  const location = useLocation();
  const inNoticePage = location.pathname.includes('notices');

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };
  return createPortal(
    <>
      <Backdrop onClick={onModalOpen} inNoticePage={inNoticePage}>
        <ModalWindow>
          <CloseBtn type="button" onClick={toggleModal}>
            <CrossIcon />
          </CloseBtn>
          {children}
        </ModalWindow>
      </Backdrop>
    </>,
    modalContainer
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;