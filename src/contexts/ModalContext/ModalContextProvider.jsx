import React from 'react';
import { ModalContext } from './ModalContext';
import { useState } from 'react';
import { ContainerModal } from '../../components/Modals';

import { useAuth } from 'hooks/authHooks';
import { ThemeProvider } from 'styled-components';
import { light, dark, violet } from '../../components/styles/Theme.styled';

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const themes = {
    light,
    dark,
    violet,
  };

  const { user } = useAuth();

  const openModal = modalConfig => {
    setModalContent(modalConfig);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ThemeProvider theme={themes[user.theme]}>
      <ModalContext.Provider value={valueModalProvider}>
        {modalOpened && <ContainerModal {...modalContent} />}
        {children}
      </ModalContext.Provider>
    </ThemeProvider>
  );
};
