import Modal from '@mui/material/Modal';
import * as React from 'react';

const ContainerModal = ({ handleClose, open, component }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={style}>{component}</div>
    </Modal>
  );
};
export default ContainerModal;
