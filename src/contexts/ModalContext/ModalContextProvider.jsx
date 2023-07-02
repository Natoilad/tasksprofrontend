import React from "react";
import { ModalContext } from "./ModalContext"
import { useState } from "react";
import { ContainerModal } from "../../components/Modals"

export const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    const valueModalProvider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            {modalOpened && <ContainerModal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}