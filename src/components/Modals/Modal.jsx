import Modal from '@mui/material/Modal';
import React, { useContext } from 'react';

import { ModalContext } from '../../contexts';

export const ContainerModal = props => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const { children, title } = props;

  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <Modal open={openModal} onClose={closeModal}>
      <div style={style}>
        <h2>{title}</h2>
        {children}
      </div>
    </Modal>
  );
};
